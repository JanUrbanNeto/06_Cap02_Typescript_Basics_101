interface Course {
   name: string;
   duration?: number;
   educator?: String; //prnto de interrogação diz que o atributo é opcional para ser informado.
}

class CreateCourseService {
   
   execute({ name, duration = 8, educator }: Course) { // =8 é o valor default caso não seja passado nos parâmetros
      console.log(name, duration, educator);
   }
}

export default new CreateCourseService();