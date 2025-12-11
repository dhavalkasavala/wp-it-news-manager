<?php
/**
 * Plugin Name: IT News Manager
 * Description: Manage IT employee–focused news via custom REST API + React TypeScript frontend.
 * Version: 1.0.1
 * Author: Dhaval
 */

if (!defined('ABSPATH')) exit;

require_once plugin_dir_path(__FILE__) . 'includes/class-itnews-cpt.php';
require_once plugin_dir_path(__FILE__) . 'includes/class-itnews-rest.php';

class ITNewsManager {
    public function __construct() {
        new ITNewsCPT();
        new ITNewsREST();

        add_action('wp_enqueue_scripts', [$this, 'enqueue_assets']);
        add_shortcode('it_news_app', [$this, 'render_app']);
    }

    public function enqueue_assets() {
        wp_enqueue_script(
            'it-news-app',
            plugin_dir_url(__FILE__) . 'build/index.js',
            ['wp-element'],
            filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
            true
        );

        wp_enqueue_style(
            'it-news-style',
            plugin_dir_url(__FILE__) . 'build/index.css',
            [],
            filemtime(plugin_dir_path(__FILE__) . 'build/index.css')
        );

        wp_localize_script('it-news-app', 'ITNewsConfig', [
            'rest_url' => rest_url('itnews/v1'),
            'nonce'    => wp_create_nonce('wp_rest')
        ]);
    }

    public function render_app() {
        return '<div id="it-news-app"></div>';
    }
}

new ITNewsManager();
