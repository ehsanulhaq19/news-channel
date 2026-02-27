<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('media_types', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
        });

        DB::table('media_types')->insert(
            ['name' => 'Audio']
        );
        DB::table('media_types')->insert(
            ['name' => 'Video']
        );
        DB::table('media_types')->insert(
            ['name' => 'Image']
        );
    }

    public function down(): void
    {
        Schema::dropIfExists('media_types');
    }
};
