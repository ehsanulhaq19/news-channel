<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('article_media', function (Blueprint $table) {
            $table->id();
            $table->text('caption')->nullable();
            $table->string('url');
            $table->unsignedBigInteger('article_id');
            $table->unsignedBigInteger('type_id');
            $table->timestamps();

            $table->foreign('type_id')->references('id')->on('media_types');
            $table->foreign('article_id')->references('id')->on('articles');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('article_media');
    }
};
