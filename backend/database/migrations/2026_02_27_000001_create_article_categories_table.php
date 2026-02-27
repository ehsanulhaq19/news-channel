<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('article_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
        });

        DB::table('article_categories')->insert(
            ['name' => 'Business']
        );
        DB::table('article_categories')->insert(
            ['name' => 'Politics']
        );
        DB::table('article_categories')->insert(
            ['name' => 'Sport']
        );
        DB::table('article_categories')->insert(
            ['name' => 'World']
        );
        DB::table('article_categories')->insert(
            ['name' => 'Entertainment']
        );
    }

    public function down(): void
    {
        Schema::dropIfExists('article_categories');
    }
};
