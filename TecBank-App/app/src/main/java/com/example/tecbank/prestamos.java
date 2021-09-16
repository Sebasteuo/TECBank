package com.example.tecbank;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class prestamos extends AppCompatActivity {

    private ListView Lv1;
    private ArrayList<String> prest = new ArrayList<String>();
    String aux;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_prestamos);

        Lv1= (ListView)findViewById(R.id.lv_prestamos);

        aux="Prestamo_1";
        prest.add(aux);
        aux= "Prestamo_2";
        prest.add(aux);
        ArrayAdapter<String> adapter= new ArrayAdapter<String>(this,R.layout.list_item_cta,prest);
        Lv1.setAdapter(adapter);

        Lv1.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent cuenta_inf = new Intent(getApplicationContext(), cuenta_info.class);
                cuenta_inf.putExtra("info",prest.get(position));
                startActivity(cuenta_inf);
            }
        });
    }

    public void pagos(View view){
        Intent pagos = new Intent(this, tarjeta_pagos.class);
        pagos.putExtra("lista",prest);
        startActivity(pagos);
    }

}
