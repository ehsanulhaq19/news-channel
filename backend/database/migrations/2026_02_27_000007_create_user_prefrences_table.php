<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_prefrences', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->jsonb('source_ids')->nullable();
            $table->jsonb('author_ids')->nullable();
            $table->jsonb('category_ids')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_prefrences');
    }
};
