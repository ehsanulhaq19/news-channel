<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\ArticleCategoryController;
use App\Http\Controllers\Api\ArticleAuthorController;
use App\Http\Controllers\Api\ArticleSourceController;
use App\Http\Controllers\Api\UserPrefrenceController;

Route::prefix('/v1')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    
    Route::middleware(['auth:sanctum'])->group(function () {
        Route::get('/articles-by-categories', [ArticleController::class, 'getArticleCollection']);
        Route::get('/articles-search', [ArticleController::class, 'getArticleSearchCollection']);
        Route::post('/user-prefrences', [UserPrefrenceController::class, 'postUserPrefrenceItem']);
        Route::get('/user-prefrences', [UserPrefrenceController::class, 'getUserPrefrenceItem']);
        Route::get('/article-categories', [ArticleCategoryController::class, 'getArticleCategoriesCollection']);
        Route::get('/article-authors', [ArticleAuthorController::class, 'getArticleAuthorsCollection']);
        Route::get('/article-sources', [ArticleSourceController::class, 'getArticleSourcesCollection']);
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
