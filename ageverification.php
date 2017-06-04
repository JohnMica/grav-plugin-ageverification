<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;

class AgeVerificationPlugin extends Plugin
{
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0],
        ];
    }

    public function onPluginsInitialized()
    {
        if ($this->isAdmin()) {
            $this->active = false;
            return;
        }

        $this->enable([
            'onTwigTemplatePaths' => ['onTwigTemplatePaths', 0],
            'onTwigSiteVariables' => ['onTwigSiteVariables', 0],
        ]);
    }

    /**
     * Add current directory to twig lookup paths.
     */
    public function onTwigTemplatePaths()
    {
        $this->grav['twig']->twig_paths[] = __DIR__ . '/templates';
    }

    /**
     * if enabled on this page, load the JS + CSS theme.
     */
    public function onTwigSiteVariables()
    {
        if ($this->config->get('plugins.ageverification.jqcookie')==true) {
            $this->grav['assets']->addJs('plugin://ageverification/assets/js/jquery.cookie.js');
        }
        $this->grav['assets']->addJs('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js');
        $this->grav['assets']->addJs('plugin://ageverification/assets/js/ageverification.js');
        $this->grav['assets']->addCss('plugin://ageverification/assets/css/ageverification.css');

        if ($this->config->get('plugins.ageverification.customcss')==true) {
            $this->grav['assets']->addCss($this->config->get('plugins.ageverification.urlcss'));
        }

        $twig = $this->grav['twig'];
        $twig->twig_vars['ageverification_markup'] = $twig->twig->render('partials/ageverification.html.twig', array(
            'ageverification_position' => strtolower($this->config->get('plugins.ageverification.position')),
            'ageverification_url' => $this->config->get('plugins.ageverification.url')
        ));
    }
}
