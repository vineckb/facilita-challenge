import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { nearestNeighborAlgorithm } from './router.helper';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.save(createCustomerDto);
  }

  findAll() {
    return this.customerRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return this.customerRepository.findOneByOrFail({ id });
  }

  update(id: number, data: UpdateCustomerDto) {
    return this.customerRepository.update(
      { id },
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        x: data.x,
        y: data.y,
      },
    );
  }

  remove(id: number) {
    return this.customerRepository.delete(id);
  }

  async visitingRoute() {
    const customers = await this.customerRepository.find();

    return nearestNeighborAlgorithm(customers);
  }
}
