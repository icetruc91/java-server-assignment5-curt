package webdev.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import webdev.models.Module;

@Repository
public interface ModuleRepository
  extends CrudRepository<Module, Integer>{}
