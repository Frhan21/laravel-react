<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\NewsCollection;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(5));
        return Inertia::render('Homepage', [
            'title'=>'News Portal | Homepage',
            'description' => 'Selamat datang di News Portal',
            'news' => $news
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $news = new News;
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->email;
        $news->save();
        return to_route('show.news')->with('message', "Data berhasil ditambahkan");


    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $myNews = $news->where('author', auth()->user()->email)->get();
        return Inertia::render('Dashboard', [
            'myNews' => $myNews,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news, Request $request)
    {
        return Inertia::render('EditNews', [
            'myNews' =>$news->find($request->id),
            'title' => 'Edit Berita',
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        $news->where('id', $request->id)->update([
            'title'=>$request->title,
            'description'=>$request->description,
            'category'=>$request->category,
        ]);

        return to_route('show.news')->with('message', 'Data berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $news = News::find($request->id);
        $news->delete();
        return to_route('show.news')->with('message', 'Data berhasil dihapus');
    }
}
