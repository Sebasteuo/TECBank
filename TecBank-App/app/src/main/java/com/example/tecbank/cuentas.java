package com.example.tecbank;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class cuentas extends AppCompatActivity {

    private ListView Lv1;
    private ArrayList<String> cuentas = new ArrayList<String>();
    String aux;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cuentas);

        Lv1= (ListView)findViewById(R.id.lv_cuentas);

        aux="CR123456789101112";
        cuentas.add(aux);
        aux= "CR121110987654321";
        cuentas.add(aux);
        ArrayAdapter<String> adapter1= new ArrayAdapter<String>(this,R.layout.list_item_cta,cuentas);
        Lv1.setAdapter(adapter1);

        Lv1.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent cuenta_inf = new Intent(getApplicationContext(), cuenta_info.class);
                cuenta_inf.putExtra("info",cuentas.get(position));
                startActivity(cuenta_inf);
            }
        });
    }


    public void Transaccion(View view){
        Intent trans = new Intent(this, cuenta_transaccion.class);
        trans.putExtra("lista_cuentas",cuentas);
        startActivity(trans);
    }

    public void atras(View view){
        finish();
    }
}
