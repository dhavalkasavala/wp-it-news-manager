<?php

class ITNewsCPT {
    public function __construct() {
        add_action('init', [$this, 'register']);
    }

    public function register() {
        register_post_type('it_news', [
            'label' => 'IT News',
            'public' => true,
            'show_in_rest' => true,
            'supports' => ['title', 'editor'],
            'menu_icon' => 'dashicons-megaphone'
        ]);
    }
}
