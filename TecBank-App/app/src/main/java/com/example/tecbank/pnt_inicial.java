package com.example.tecbank;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class pnt_inicial extends AppCompatActivity {

    private TextView tv1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pnt_inicial);

        tv1= (TextView)findViewById(R.id.txt_1);

        String dato= getIntent().getStringExtra("user");
        tv1.setText("Bienvenido " + dato);
    }

    public void mainAct(View view){
        finish();
    }

    public void Cuentas(View view){
        Intent cuen = new Intent(this, cuentas.class);
        //cuen.putExtra("user",usuario);
        startActivity(cuen);
    }
    public void Tarjetas(View view){
        Intent tar = new Intent(this, tarjetas.class);
        //tar.putExtra("user",usuario);
        startActivity(tar);
    }

    public void prestamos(View view){
        Intent pres = new Intent(this, prestamos.class);
        //pres.putExtra("user",usuario);
        startActivity(pres);
    }
}
