<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public $model = '';
    public function __construct(){
        $this->model = new Category();
    }
    public function index()
    {
        $data =  $this->model->get();
        return response()->json(['result' => $data, 'status' => 2000], 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = $this->model->validate($request->all());
        if ($validator->fails()){
            return response()->json(['result' => $validator->errors(), 'status' => 3000], 200);
        }

        $this->model->fill($request->all());
        $this->model->save();

        return response()->json(['result' =>  $this->model, 'status' => 2000], 200);
    }

    public function show(Category $category)
    {
        //
    }

    public function edit(Category $category)
    {
        //
    }

    public function update(Request $request, Category $category)
    {
        //
    }

    public function destroy(Category $category)
    {
        //
    }
}
