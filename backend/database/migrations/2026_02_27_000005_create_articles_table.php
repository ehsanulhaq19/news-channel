<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('trail_text')->nullable();
            $table->text('description')->nullable();
            $table->string('url', 2048)->nullable();
            $table->timestamp('published_date')->nullable();
            $table->unsignedBigInteger('author_id');
            $table->unsignedBigInteger('source_id');
            $table->unsignedBigInteger('sub_source_id')->nullable();
            $table->unsignedBigInteger('category_id');
            $table->timestamps();

            $table->foreign('author_id')->references('id')->on('article_authors');
            $table->foreign('source_id')->references('id')->on('article_sources');
            $table->foreign('sub_source_id')->references('id')->on('article_sources')->nullable();
            $table->foreign('category_id')->references('id')->on('article_categories');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
