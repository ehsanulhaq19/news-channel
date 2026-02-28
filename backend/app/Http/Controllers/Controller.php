<?php

namespace App\Http\Controllers;

/**
 * @OA\Info(
 *     title="News Channel API",
 *     version="1.0.0",
 *     description="News Channel API Documentation",
 *     @OA\Contact(email="admin@example.com")
 * )
 *
 * @OA\Server(
 *     url="/api/v1",
 *     description="API Server"
 * )
 *
 * @OA\SecurityScheme(
 *     securityScheme="bearerAuth",
 *     type="http",
 *     scheme="bearer",
 *     bearerFormat="JWT"
 * )
 */
abstract class Controller
{
    //
}
