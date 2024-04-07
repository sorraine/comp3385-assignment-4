<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index()
    {
        // Retrieve all movies from the database
        $movies = Movie::all();

        return response()->json(['movies' => $movies]);
    }

    public function store(Request $request)
    {
        // Validate incoming request data
        $validatedData = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'poster'=> 'required|file|image',

          
        ]);
    

      // Create a new movie record in the database
         $movieposter = $request->file('poster');
         $filename = time() . '.' . $movieposter->getClientOriginalExtension(); /**Credits to Fabian Bertrand */
         $path = $movieposter->storeAs('posters', $filename, 'public');
    
            $movie = new Movie();
            $movie->title = $request->input('title');
            $movie->description = $request->input('description');
            $movie->poster = asset('storage/'. $path);
            $movie->save();
     
            return response()->json([
                'message' => 'Movie created successfully',
                'movie'  => $movie
            ], 201);     
      
      
    }
}