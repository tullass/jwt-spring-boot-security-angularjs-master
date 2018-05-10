package org.techforumist.jwt.domain;

import java.io.Serializable;
import java.util.GregorianCalendar;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Consultor implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2505734602727583743L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String apelido;
	private String datanascimento;
	private String idade;
	private String genero;
	private String civil;
	private String nivel;
	private String datafim;
	private String datainicio;
	private String experiencia;
	private String salariobase;
	private String salarioatual;
	private String trabalho;
	private String componente;
	private String nomebanco;
	private String nib;
	private String nuit;
	private String ions;
	private String skype;
	private String telefonei;
	private String telefoneii;
	private Boolean estado;
	GregorianCalendar calendar = new GregorianCalendar();
	private int data = calendar.getWeekYear();

	@ManyToOne
	private Departamento departamento;

	
	@ManyToOne
	private Educacao educacao;

	@ManyToOne
	private Gestor gestor;

	@ManyToOne
	private Posiccao posiccao;

	@ManyToOne(cascade = CascadeType.ALL)
	private Programa programa;

	@ManyToOne
	private Supervisor supervisor;

	@ManyToOne(cascade = CascadeType.ALL)
	private Endereco endereco;

	@ManyToOne(cascade = CascadeType.ALL)
	private Contactos emergencia;

	@ManyToOne(cascade = CascadeType.ALL)
	private AppUser appUser;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getApelido() {
		return apelido;
	}

	public void setApelido(String apelido) {
		this.apelido = apelido;
	}

	public String getDatanascimento() {
		return datanascimento;
	}

	public void setDatanascimento(String datanascimento) {
		this.datanascimento = datanascimento;
	}

	public String getIdade() {
		return idade;
	}

	public void setIdade(String idade) {
		this.idade = idade;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getCivil() {
		return civil;
	}

	public void setCivil(String civil) {
		this.civil = civil;
	}

	public String getNivel() {
		return nivel;
	}

	public void setNivel(String nivel) {
		this.nivel = nivel;
	}

	public String getDatafim() {
		return datafim;
	}

	public void setDatafim(String datafim) {
		this.datafim = datafim;
	}

	public String getDatainicio() {
		return datainicio;
	}

	public void setDatainicio(String datainicio) {
		this.datainicio = datainicio;
	}

	public String getExperiencia() {
		return experiencia;
	}

	public void setExperiencia(String experiencia) {
		this.experiencia = experiencia;
	}

	public String getSalariobase() {
		return salariobase;
	}

	public void setSalariobase(String salariobase) {
		this.salariobase = salariobase;
	}

	public String getSalarioatual() {
		return salarioatual;
	}

	public void setSalarioatual(String salarioatual) {
		this.salarioatual = salarioatual;
	}

	public String getTrabalho() {
		return trabalho;
	}

	public void setTrabalho(String trabalho) {
		this.trabalho = trabalho;
	}

	public String getComponente() {
		return componente;
	}

	public void setComponente(String componente) {
		this.componente = componente;
	}

	public String getNomebanco() {
		return nomebanco;
	}

	public void setNomebanco(String nomebanco) {
		this.nomebanco = nomebanco;
	}

	public String getNib() {
		return nib;
	}

	public void setNib(String nib) {
		this.nib = nib;
	}

	public String getNuit() {
		return nuit;
	}

	public void setNuit(String nuit) {
		this.nuit = nuit;
	}

	public String getIons() {
		return ions;
	}

	public void setIons(String ions) {
		this.ions = ions;
	}

	public String getSkype() {
		return skype;
	}

	public void setSkype(String skype) {
		this.skype = skype;
	}

	public String getTelefonei() {
		return telefonei;
	}

	public void setTelefonei(String telefonei) {
		this.telefonei = telefonei;
	}

	public String getTelefoneii() {
		return telefoneii;
	}

	public void setTelefoneii(String telefoneii) {
		this.telefoneii = telefoneii;
	}

	public Boolean getEstado() {
		return estado;
	}

	public void setEstado(Boolean estado) {
		this.estado = estado;
	}

	public GregorianCalendar getCalendar() {
		return calendar;
	}

	public void setCalendar(GregorianCalendar calendar) {
		this.calendar = calendar;
	}

	public int getData() {
		return data;
	}

	public void setData(int data) {
		this.data = data;
	}

	public Departamento getDepartamento() {
		return departamento;
	}

	public void setDepartamento(Departamento departamento) {
		this.departamento = departamento;
	}

	public Educacao getEducacao() {
		return educacao;
	}

	public void setEducacao(Educacao educacao) {
		this.educacao = educacao;
	}

	public Gestor getGestor() {
		return gestor;
	}

	public void setGestor(Gestor gestor) {
		this.gestor = gestor;
	}

	public Posiccao getPosiccao() {
		return posiccao;
	}

	public void setPosiccao(Posiccao posiccao) {
		this.posiccao = posiccao;
	}

	public Programa getPrograma() {
		return programa;
	}

	public void setPrograma(Programa programa) {
		this.programa = programa;
	}

	public Supervisor getSupervisor() {
		return supervisor;
	}

	public void setSupervisor(Supervisor supervisor) {
		this.supervisor = supervisor;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public Contactos getEmergencia() {
		return emergencia;
	}

	public void setEmergencia(Contactos emergencia) {
		this.emergencia = emergencia;
	}

	public AppUser getAppUser() {
		return appUser;
	}

	public void setAppUser(AppUser appUser) {
		this.appUser = appUser;
	}

}
