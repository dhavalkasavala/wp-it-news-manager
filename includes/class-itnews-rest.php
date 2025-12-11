<?php

class ITNewsREST {
    public function __construct() {
        add_action('rest_api_init', [$this, 'routes']);
    }

    public function routes() {
        register_rest_route('itnews/v1', '/list', [
            'methods' => 'GET',
            'callback' => [$this, 'list']
        ]);

        register_rest_route('itnews/v1', '/create', [
            'methods' => 'POST',
            'callback' => [$this, 'create'],
            'permission_callback' => function() {
                return current_user_can('edit_posts');
            }
        ]);

        register_rest_route('itnews/v1', '/delete/(?P<id>\d+)', [
            'methods' => 'DELETE',
            'callback' => [$this, 'delete'],
            'permission_callback' => function() {
                return current_user_can('delete_posts');
            }
        ]);
    }

    public function list() {
        $posts = get_posts([
            'post_type' => 'it_news',
            'post_status' => 'publish',
            'numberposts' => -1
        ]);

        return array_map(fn($p) => [
            'id' => $p->ID,
            'title' => $p->post_title,
            'content' => wpautop($p->post_content)
        ], $posts);
    }

    public function create(WP_REST_Request $req) {
        $params = $req->get_json_params();

        $id = wp_insert_post([
            'post_type' => 'it_news',
            'post_title' => sanitize_text_field($params['title']),
            'post_content' => wp_kses_post($params['content']),
            'post_status' => 'publish'
        ]);

        return ['id' => $id, 'message' => 'Created'];
    }

    public function delete($req) {
        wp_delete_post($req['id'], true);
        return ['message' => 'Deleted'];
    }
}
