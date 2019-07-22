<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->integer('price');
            $table->integer('stock');
            $table->enum('status', ['Y', 'T']);
            $table->text('desc');
            $table->text('information')->nullable();
            $table->text('image_thumb');
            $table->float('weight');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('promote_id');
            $table->timestamps();

            $table->index('category_id');
            $table->index('promote_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
