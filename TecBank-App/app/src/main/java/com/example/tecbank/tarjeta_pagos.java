package com.example.tecbank;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.Spinner;

import java.util.ArrayList;

public class tarjeta_pagos extends AppCompatActivity {

    private Spinner sp1;
    private ArrayList<String> listatarjetas = new ArrayList<String>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tarjeta_pagos);



        listatarjetas= getIntent().getStringArrayListExtra("lista");


        sp1= (Spinner) findViewById(R.id.spinner3);
        ArrayAdapter<String> adapter1= new ArrayAdapter<String>(this,android.R.layout.simple_spinner_item,listatarjetas);
        sp1.setAdapter(adapter1);
    }
}
