package com.example.tecbank;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.tecbank.interfases.RetrofitClient;
import com.example.tecbank.interfases.clienteAPI;
import com.example.tecbank.models.cliente;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

import dmax.dialog.SpotsDialog;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.functions.Consumer;
import io.reactivex.schedulers.Schedulers;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {

    // declaracion de variables
    private EditText txt_user, txt_pass;

    private RequestQueue queue;
    private ArrayList<String> users = new ArrayList<String>();

    clienteAPI clienteAPI;
    CompositeDisposable compositeDisposable = new CompositeDisposable();



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        txt_user =(EditText)findViewById(R.id.txt_user);
        txt_pass = (EditText)findViewById(R.id.txt_passw);

        queue= Volley.newRequestQueue(this);
        clienteAPI = RetrofitClient.getInstance().create(clienteAPI.class);

    }
    @Override
    protected void onStop(){
        compositeDisposable.clear();
        super.onStop();
    }

    //metodo de boton de entrar
    public void inicial(View view) {
        String usuario = txt_user.getText().toString();
        String contrasenia = txt_pass.getText().toString();
        //obtenerusuario();


        if (usuario.length()==0 || contrasenia.length()==0) {
            Toast.makeText(this,"Ingrese valores en los campos solicitados o registrese",Toast.LENGTH_LONG).show();

        }
        else{

            //for (int i=0; i<users.size(); i++) {

                if (usuario.equalsIgnoreCase("Tec")&& contrasenia.equalsIgnoreCase("1234")) {
                    users.clear();
                    Intent inicial = new Intent(this, pnt_inicial.class);
                    inicial.putExtra("user", usuario);
                    startActivity(inicial);
                    //break;

                } else {
                    Toast.makeText(this, "Usuario o Contraseña incorrecta", Toast.LENGTH_LONG).show();
                    users.clear();
                    //break;
                }
            //}
        }
    }
    /* diferentes pruebas de conexion
    private void find(int codigo){
        Retrofit retro= new Retrofit.Builder().baseUrl("https://192.168.1.141:44359/")
                .addConverterFactory(GsonConverterFactory.create()).build();

        clienteAPI clienteapi= retro.create(clienteAPI.class);
        Call<cliente> call=clienteapi.find(codigo);
        call.enqueue(new Callback<cliente>() {
            @Override
            public void onResponse(Call<cliente> call, retrofit2.Response<cliente> response) {
                Toast.makeText(MainActivity.this,"hay respuesta",Toast.LENGTH_SHORT).show();
                try {
                    if(response.isSuccessful()){
                        cliente c=response.body();
                        Toast.makeText(MainActivity.this,c.getUsuario(),Toast.LENGTH_SHORT).show();
                    }
                }catch (Exception ex){
                    Toast.makeText(MainActivity.this,ex.getMessage(),Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<cliente> call, Throwable t) {
                Toast.makeText(MainActivity.this,"fallo de conexion",Toast.LENGTH_SHORT).show();
            }
        });
    }



    private void obtenerusuario1(){

        String url = "https://192.168.1.141:44359/api/cliente";


        JsonArrayRequest request = new JsonArrayRequest(Request.Method.GET,url,null,new Response.Listener<JSONArray>(){


            @Override
            public void onResponse(JSONArray response) {
                for(int i=0; i<response.length(); i++) {
                    try {
                        JSONObject jsonob = new JSONObject(response.get(i).toString());
                        String user= jsonob.getString("nombre");
                        users.add(user);
                        Toast.makeText(MainActivity.this, "nombre: "+user, Toast.LENGTH_LONG).show();
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }

                }
            }
        },

                new Response.ErrorListener(){

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Toast.makeText(MainActivity.this, "sin respuesta", Toast.LENGTH_LONG).show();
                    }
                });
        Toast.makeText(MainActivity.this, "nombre: " + users, Toast.LENGTH_LONG).show();
        queue.add(request);
    }



    private void obtenerusuario(){ //prueba con otra api, Prueba exitosa

        String url = "https://my-json-server.typicode.com/typicode/demo/db";

        JsonObjectRequest request = new JsonObjectRequest(Request.Method.GET,url,null,new Response.Listener<JSONObject>(){


            @Override
            public void onResponse(JSONObject response) {
                try {
                    JSONArray jsonarray = response.getJSONArray("posts");

                    for(int i=0; i<jsonarray.length(); i++) {
                        JSONObject jsonob = new JSONObject(jsonarray.get(i).toString());
                        String user= jsonob.getString("title");
                        users.add(user);
                        //Toast.makeText(MainActivity.this, "nombre: "+user, Toast.LENGTH_LONG).show();
                    }

                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        },
                new Response.ErrorListener(){

            @Override
            public void onErrorResponse(VolleyError error) {

            }
        });

        queue.add(request);
    }


    private void obtenerusuario2(){

        String url = "https://192.168.1.141:44359/api/cliente/123456789";


        StringRequest request = new StringRequest(Request.Method.GET,url,
                new Response.Listener<String>(){

            @Override
            public void onResponse(String response) {
                Toast.makeText(MainActivity.this, response, Toast.LENGTH_LONG).show();
            }
        },
                new Response.ErrorListener(){

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Toast.makeText(MainActivity.this, "sin respuestaaaaaa", Toast.LENGTH_LONG).show();
                    }
                });
        queue.add(request);
    }


    public void ultima(){

        /*AlertDialog dialog= new SpotsDialog().Builder()
                .setContext(MainActivity.this)
                .build();
        dialog.show();*/
    /*

        cliente usuario=new cliente(123456789,"","","","","","","","","","","");

        compositeDisposable.add(clienteAPI.loginuser(usuario)
        .subscribeOn(Schedulers.io())
        .observeOn(AndroidSchedulers.mainThread())
        .subscribe(new Consumer<String>() {
            @Override
            public void accept(String s) throws Exception {
                Toast.makeText(MainActivity.this,s,Toast.LENGTH_SHORT).show();
                }
            },new Consumer<Throwable>() {
            @Override
            public void accept(Throwable throwable) throws Exception {
                //dialog().dismiss();
                Toast.makeText(MainActivity.this,throwable.getMessage(),Toast.LENGTH_SHORT).show();
            }
        }));

    }*/
}
