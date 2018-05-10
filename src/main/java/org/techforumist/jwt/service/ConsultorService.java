package org.techforumist.jwt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.techforumist.jwt.domain.Consultor;
import org.techforumist.jwt.repository.ConsultorRepository;

@Service
public class ConsultorService {

	@Autowired
	private ConsultorRepository personRepository;

	public Object findAll() {
		return personRepository.findAll();
	}

	public List<Consultor> findAllByActivo(boolean b) {
		return personRepository.findAllByEstado(true);
	}

	public Consultor findById(Long id) {
		return personRepository.findOne(id);
	}

	public Consultor save(Consultor person) {
		return personRepository.save(person);
	}

	public void delete(Long id) {
		personRepository.delete(id);
		return;
	}

}
