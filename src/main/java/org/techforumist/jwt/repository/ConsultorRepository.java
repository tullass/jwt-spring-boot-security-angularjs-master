package org.techforumist.jwt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.techforumist.jwt.domain.Consultor;

@Repository
public interface ConsultorRepository extends CrudRepository<Consultor, Long> {

	public List<Consultor> findAllByEstado(Boolean estado);

}


