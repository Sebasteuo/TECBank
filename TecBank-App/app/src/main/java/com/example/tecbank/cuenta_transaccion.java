package com.example.tecbank;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.Spinner;

import java.util.ArrayList;

public class cuenta_transaccion extends AppCompatActivity {


    private Spinner sp1;
    private Spinner sp2;
    private ArrayList<String> listacuentas = new ArrayList<String>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cuenta_transaccion);

        listacuentas= getIntent().getStringArrayListExtra("lista_cuentas");


        sp1= (Spinner) findViewById(R.id.spinner);
        ArrayAdapter<String> adapter1= new ArrayAdapter<String>(this,android.R.layout.simple_spinner_item,listacuentas);
        sp1.setAdapter(adapter1);

        sp2= (Spinner) findViewById(R.id.spinner2);
        ArrayAdapter<String> adapter2= new ArrayAdapter<String>(this,android.R.layout.simple_spinner_item,listacuentas);
        sp2.setAdapter(adapter2);
    }
}
