import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}
  
  async create(createCourseDto: CreateCourseDto) {
    return await this.courseModel.create({
      name: createCourseDto.name,
      description: createCourseDto.description,
      level: createCourseDto.level,
      price: createCourseDto.price
    });
   
  }

  async findAll() {
    return await this.courseModel.find().exec();
  }

  async findOne(id: string) {
    const courseData =  await this.courseModel.findById({'_id': id }).exec();
    if (courseData) {
      return {data: courseData, message: "Course found"};
    } else {
      return {message: "Course not found"};
    }
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const updatedData = await this.courseModel.findByIdAndUpdate(id, updateCourseDto, { new: true }).exec();
    if (updatedData) {
      return {data: updatedData, message: "Course updated successfully"};
    } else {
      return {message: "Course not found"};
    }
  }

  async remove(id: string) {
    const deleteCourse =  await this.courseModel.findByIdAndDelete(id).exec();

    if (deleteCourse) {
      return {data: deleteCourse, message: "Course deleted successfully"};
    } else {
      return {message: "Course not found"};
    }
  }
}
