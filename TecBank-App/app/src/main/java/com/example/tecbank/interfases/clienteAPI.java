package com.example.tecbank.interfases;

import com.example.tecbank.models.cliente;

import io.reactivex.Observable;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface clienteAPI {
    /*@GET("api/cliente/{id}")
    Observable Call<cliente> find(@Path("id")int id);*/

    @POST("api/cliente")
    Observable<String> registerUser(@Body cliente usuario);

    @POST("api/cliente")
    Observable<String> loginuser(@Body cliente usuario);
}
