<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'key' => env('POSTMARK_API_KEY'),
    ],

    'resend' => [
        'key' => env('RESEND_API_KEY'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'articles_sources' => [
        'news_org_end_point' => env('NEWS_ORG_END_POINT'),
        'news_org_api_key' => env('NEWS_ORG_API_KEY'),
        
        'the_guardian_end_point' => env('THE_GUARDIAN_END_POINT'),
        'the_guardian_api_key' => env('THE_GUARDIAN_API_KEY'),
        
        'new_york_times_end_point' => env('NEW_YORK_TIMES_END_POINT'),
        'new_york_times_api_key' => env('NEW_YORK_TIMES_API_KEY'),
        'new_york_times_host_url' => env('NEW_YORK_TIMES_HOST_URL'),
    ]

];
