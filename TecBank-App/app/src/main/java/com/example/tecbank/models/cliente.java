package com.example.tecbank.models;

public class cliente{

    private int cedula;
    private String nombre;
    private String apellido_1;
    private String apellido_2;
    private String usuario;
    private String password;
    private String provincia;
    private String canton;
    private String distrito;
    private String telefono;
    private String ingreso_mensual;
    private String tipo;

    public cliente() {
    }

    public cliente(int cedula, String nombre, String apellido_1, String apellido_2, String usuario, String password, String provincia, String canton, String distrito, String telefono, String ingreso_mensual, String tipo) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido_1 = apellido_1;
        this.apellido_2 = apellido_2;
        this.usuario = usuario;
        this.password = password;
        this.provincia = provincia;
        this.canton = canton;
        this.distrito = distrito;
        this.telefono = telefono;
        this.ingreso_mensual = ingreso_mensual;
        this.tipo = tipo;
    }

    public int getCedula() {
        return cedula;
    }

    public void setCedula(int cedula) {
        this.cedula = cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido_1() {
        return apellido_1;
    }

    public void setApellido_1(String apellido_1) {
        this.apellido_1 = apellido_1;
    }

    public String getApellido_2() {
        return apellido_2;
    }

    public void setApellido_2(String apellido_2) {
        this.apellido_2 = apellido_2;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getCanton() {
        return canton;
    }

    public void setCanton(String canton) {
        this.canton = canton;
    }

    public String getDistrito() {
        return distrito;
    }

    public void setDistrito(String distrito) {
        this.distrito = distrito;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getIngreso_mensual() {
        return ingreso_mensual;
    }

    public void setIngreso_mensual(String ingreso_mensual) {
        this.ingreso_mensual = ingreso_mensual;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }


}

