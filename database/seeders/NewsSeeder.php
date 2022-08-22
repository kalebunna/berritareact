<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        for ($i = 0; $i < 10; $i++) {
            DB::table('news')->insert([
                "title" => fake()->text(),
                "description" => fake()->paragraph(3, true),
                "category" => fake()->sentence(1, true),
                "author" => fake()->email(),
            ]);
        }
    }
}
