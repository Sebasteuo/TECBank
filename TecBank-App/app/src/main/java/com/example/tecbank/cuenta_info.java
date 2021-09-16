package com.example.tecbank;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class cuenta_info extends AppCompatActivity {

    private TextView tv1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cuenta_info);

        tv1= (TextView)findViewById(R.id.txt_info);

        String num_cuenta= getIntent().getStringExtra("info");
        tv1.setText(num_cuenta);
    }
}