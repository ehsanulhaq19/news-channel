<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('article_sources', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->boolean('is_parent_source')->default(0);
            $table->timestamps();
        });

        DB::table('article_sources')->insert(
            ['name' => 'News.org', 'is_parent_source' => true]
        );
        DB::table('article_sources')->insert(
            ['name' => 'The Guardian', 'is_parent_source' => true]
        );
        DB::table('article_sources')->insert(
            ['name' => 'New York Times', 'is_parent_source' => true]
        );
    }

    public function down(): void
    {
        Schema::dropIfExists('article_sources');
    }
};
