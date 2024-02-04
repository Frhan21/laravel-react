<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\Faker;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create('id_ID');
        for($i=0; $i < 10; $i++) {
            News::create([
                'title' =>$faker->sentence(),
                'description' =>$faker->paragraph(2, true),
                'category' =>$faker->name(),
                'author' =>$faker->email(),
            ]);
        }

    }
}
