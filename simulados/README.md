# Simulados

## Factory method
1. O Factory Method é um padrão de projeto pertencente a qual categoria?
   - a) Padrões de Criação
   - b) Padrões Estruturais
   - c) Padrões Comportamentais
   - d) Padrões Arquiteturais

2. Qual é o objetivo principal do Factory Method?
   - a) Permitir a criação de objetos sem especificar suas classes concretas.
   - b) Promover o acoplamento fraco entre objetos.
   - c) Facilitar a comunicação entre objetos.
   - d) Definir uma hierarquia de classes para objetos relacionados.

3. O Factory Method envolve a criação de objetos em uma classe abstrata que é implementada por subclasses concretas. Essa classe abstrata é conhecida como:
   - a) Abstract Factory
   - b) Abstract Class
   - c) Factory Class
   - d) Product

4. Qual é o nome do método abstrato que deve ser implementado pelas subclasses no Factory Method?
   - a) create()
   - b) newObject()
   - c) getInstance()
   - d) factoryMethod()

5. No Factory Method, as subclasses são responsáveis por criar objetos de um determinado tipo, conhecidos como:
   - a) Product
   - b) Creator
   - c) Factory
   - d) Client

6. O Factory Method é útil quando:
   - a) É necessário criar objetos de diferentes famílias relacionadas.
   - b) Deseja-se ocultar a implementação detalhada dos objetos.
   - c) É necessário restringir a criação de objetos.
   - d) É necessário criar objetos complexos com muitos parâmetros.

7. Em um diagrama UML, qual símbolo é usado para representar o Factory Method?
   - a) Setas
   - b) Linhas sólidas
   - c) Linhas pontilhadas
   - d) Linhas tracejadas

8. Qual é a principal vantagem do Factory Method?
   - a) Melhora a reutilização de código.
   - b) Aumenta a eficiência do programa.
   - c) Reduz a complexidade do sistema.
   - d) Facilita a comunicação entre objetos.

9. Qual dos seguintes padrões de projeto é frequentemente combinado com o Factory Method?
   - a) Singleton
   - b) Observer
   - c) Strategy
   - d) Template Method

10. O Factory Method é uma solução para qual problema de projeto?
    - a) Criação de objetos relacionados sem especificar suas classes concretas.
    - b) Compartilhamento eficiente de objetos.
    - c) Controle de acesso a objetos.
    - d) Criação de classes abstratas.

11. O Factory Method permite a substituição fácil de classes de fábrica por versões:
    - a) Mock
    - b) Proxy
    - c) Adapter
    - d) Decorator

12. No Factory Method, o cliente utiliza o Factory Method para obter objetos do tipo:
    - a) Creator
    - b) Factory
    - c) Product
    - d) AbstractFactory

13. O Factory Method é uma alternativa ao

 uso direto do operador:
    - a) new
    - b) create
    - c) instance
    - d) make

14. O Factory Method suporta:
    - a) Encapsulamento
    - b) Herança
    - c) Polimorfismo
    - d) Sobrecarga

15. Qual dos seguintes é um exemplo comum de uso do Factory Method em aplicativos do mundo real?
    - a) Gerenciadores de banco de dados
    - b) Sistemas de gerenciamento de projetos
    - c) Navegadores de internet
    - d) Editores de texto

16. Qual dos seguintes NÃO é um exemplo adequado de uso do Factory Method?
    - a) Criação de diferentes tipos de veículos em uma fábrica.
    - b) Criação de diferentes tipos de animais em um zoológico.
    - c) Criação de diferentes tipos de bebidas em uma cafeteria.
    - d) Criação de diferentes tipos de roupas em uma loja de roupas.

17. No Factory Method, a classe abstrata que define o Factory Method é conhecida como:
    - a) Creator
    - b) Product
    - c) Factory
    - d) AbstractFactory

18. No Factory Method, a classe concreta que implementa o Factory Method é responsável por:
    - a) Definir a interface abstrata.
    - b) Criar objetos específicos.
    - c) Gerenciar a fábrica de objetos.
    - d) Executar as operações nos objetos.

19. O Factory Method permite a criação de objetos através de subclasses, promovendo assim o princípio de:
    - a) Acoplamento forte
    - b) Herança múltipla
    - c) Encapsulamento
    - d) Acoplamento fraco

20. Qual é a principal diferença entre o Factory Method e o Abstract Factory Method?
    - a) O Factory Method lida com a criação de famílias de objetos relacionados, enquanto o Abstract Factory Method lida com a criação de um único tipo de objeto.
    - b) O Factory Method utiliza classes abstratas para criar objetos, enquanto o Abstract Factory Method utiliza interfaces.
    - c) O Factory Method requer que as subclasses implementem um método abstrato para criar objetos, enquanto o Abstract Factory Method requer que as subclasses implementem uma interface para criar famílias de objetos.
    - d) O Factory Method é um padrão de projeto de criação, enquanto o Abstract Factory Method é um padrão de projeto estrutural.

Gabarito:

1. a
2. a
3. b
4. d
5. a
6. b
7. c
8. a
9. d
10. a
11. a
12. c
13. a
14. c
15. a
16. d
17. a
18. b
19. d
20. c
## Abstract Factory method
Simulado sobre Abstract Factory:

Questão 1: O que é o padrão de projeto Abstract Factory?
a) Um padrão que define uma interface para criar objetos em uma superclasse, mas permite que as subclasses decidam quais classes concretas instanciar.
b) Um padrão que fornece uma interface para criar famílias de objetos relacionados sem especificar suas classes concretas.
c) Um padrão que permite a criação de objetos por meio de uma classe especializada.
d) Um padrão que define uma interface para criar objetos, mas adia a decisão sobre qual classe concreta instanciar para as subclasses.

Questão 2: Qual é o objetivo principal do padrão Abstract Factory?
a) Encapsular a lógica de criação de objetos em uma interface abstrata.
b) Permitir a seleção dinâmica de implementação em tempo de execução.
c) Fornecer uma maneira flexível de criar famílias de objetos relacionados.
d) Promover a flexibilidade e extensibilidade do código.

Questão 3: Qual é a diferença entre o padrão Abstract Factory e o padrão Factory Method?
a) O padrão Abstract Factory cria famílias de objetos relacionados, enquanto o padrão Factory Method cria um objeto específico.
b) O padrão Abstract Factory usa uma hierarquia de fábricas, enquanto o padrão Factory Method usa uma única fábrica.
c) O padrão Abstract Factory encapsula a criação de objetos em uma interface abstrata, enquanto o padrão Factory Method delega a criação para subclasses.
d) Não há diferença entre os padrões Abstract Factory e Factory Method.

Questão 4: Quais são as principais vantagens do padrão Abstract Factory?
a) Flexibilidade, extensibilidade e encapsulamento da criação de objetos.
b) Facilidade de implementação e baixo acoplamento entre classes.
c) Maior reuso de código e redução de complexidade.
d) Aumento da produtividade e melhoria da manutenibilidade do código.

Questão 5: Em que tipo de situação o padrão Abstract Factory é mais adequado?
a) Quando há a necessidade de criar uma única classe concreta de objetos.
b) Quando é necessário criar objetos independentes entre si.
c) Quando se deseja fornecer várias implementações de uma família de objetos.
d) Quando não há a necessidade de fornecer uma interface comum para criar objetos.

Questão 6: No padrão Abstract Factory, como são criados os objetos relacionados?
a) Através de um método estático da classe abstrata de fábrica.
b) Através de uma classe de fábrica concreta que implementa a interface abstrata de fábrica.
c) Através de um método de instância da classe abstrata de fábrica.
d) Através de uma classe concreta que implementa diretamente a interface do objeto.

Questão 7: O padrão Abstract Factory viola algum princípio de design?
a) Princípio da Responsabilidade Única (SRP).
b) Princípio do Aberto/Fechado (OCP).
c) Princípio da Substituição de Liskov (LSP).
d) Princípio da Inversão de Dependência (DIP).

Questão 8: Qual é a relação entre o padrão Abstract Factory e o padrão

 Dependency Injection?
a) O padrão Abstract Factory é uma forma de implementar o padrão Dependency Injection.
b) O padrão Dependency Injection é uma forma de implementar o padrão Abstract Factory.
c) Os padrões Abstract Factory e Dependency Injection são completamente independentes um do outro.
d) O padrão Abstract Factory é uma variante do padrão Dependency Injection.

Questão 9: O padrão Abstract Factory é considerado um padrão de criação ou um padrão estrutural?
a) Padrão de criação.
b) Padrão estrutural.
c) Padrão comportamental.
d) Não é um padrão de projeto reconhecido.

Questão 10: Quais são as principais classes envolvidas em um padrão Abstract Factory?
a) AbstractFactory, ConcreteFactory, AbstractProduct, ConcreteProduct.
b) Creator, ConcreteCreator, Product, ConcreteProduct.
c) Factory, AbstractProduct, ConcreteProduct, Client.
d) InterfaceFactory, Factory, AbstractProduct, ConcreteProduct.

Questão 11: Como o padrão Abstract Factory ajuda a garantir a coesão entre objetos relacionados?
a) Ao fornecer uma interface abstrata para a criação de objetos, o padrão Abstract Factory promove a criação de objetos consistentes e compatíveis entre si.
b) O padrão Abstract Factory permite que objetos relacionados sejam criados por uma única classe de fábrica, garantindo sua coerência.
c) O padrão Abstract Factory ajuda a evitar acoplamento indesejado entre objetos, pois centraliza a criação de objetos relacionados em uma única classe.
d) O padrão Abstract Factory não tem relação direta com a coesão entre objetos relacionados.

Questão 12: É possível ter várias implementações de fábricas concretas no padrão Abstract Factory?
a) Sim, é possível ter várias implementações de fábricas concretas para criar objetos relacionados.
b) Não, o padrão Abstract Factory permite apenas uma única implementação de fábrica concreta.
c) Sim, mas todas as fábricas concretas devem criar os mesmos tipos de objetos relacionados.
d) Não, o padrão Abstract Factory não permite múltiplas implementações de fábricas concretas.

Questão 13: Quais são os possíveis desafios ao implementar o padrão Abstract Factory?
a) Aumento da complexidade do código e dependência excessiva de interfaces.
b) Dificuldade em estender ou adicionar novas classes de objetos relacionados.
c) Dificuldade em garantir a compatibilidade entre objetos criados por diferentes fábricas concretas.
d) Todos os itens acima.

Questão 14: O padrão Abstract Factory é adequado para sistemas com requisitos de desempenho muito altos?
a) Sim, o padrão Abstract Factory pode ser usado eficientemente em sistemas com requisitos de desempenho muito altos.
b) Não, o padrão Abstract Factory pode introduzir overhead devido à criação de objetos indireta.
c) Depende do contexto do sistema e da implementação específica do padrão Abstract Factory.
d) O padrão Abstract Factory não tem relação direta com requisitos de desempenho.

Questão 15: Qual é a relação entre o padrão Abstract Factory e o princípio de programação "Programar para uma interface, não para uma implementação"?
a) O padrão Abstract Factory segue esse princípio, pois utiliza interfaces abstratas

 para criar objetos em vez de se referir a classes concretas.
b) O padrão Abstract Factory viola esse princípio, pois cria objetos usando classes concretas em vez de interfaces abstratas.
c) O princípio "Programar para uma interface, não para uma implementação" não tem relação com o padrão Abstract Factory.
d) O padrão Abstract Factory é uma implementação direta do princípio "Programar para uma interface, não para uma implementação".

Questão 16: O padrão Abstract Factory é amplamente utilizado na indústria de software?
a) Sim, o padrão Abstract Factory é amplamente utilizado e é considerado um dos padrões mais úteis e poderosos.
b) Não, o padrão Abstract Factory é considerado obsoleto e raramente é usado na indústria de software atualmente.
c) Depende do domínio e do contexto do sistema. Em alguns domínios, o padrão Abstract Factory é amplamente utilizado, enquanto em outros é menos comum.
d) O padrão Abstract Factory é amplamente utilizado apenas em projetos de pequena escala.

Questão 17: O padrão Abstract Factory é uma solução para todos os problemas relacionados à criação de objetos?
a) Sim, o padrão Abstract Factory é uma solução abrangente e pode ser aplicado a todos os problemas relacionados à criação de objetos.
b) Não, o padrão Abstract Factory é adequado apenas para problemas específicos onde há a necessidade de criar famílias de objetos relacionados.
c) O padrão Abstract Factory é uma solução genérica, mas sua eficácia depende do contexto do problema e dos requisitos do sistema.
d) O padrão Abstract Factory é uma solução alternativa que pode ser usada em conjunto com outros padrões para resolver problemas de criação de objetos.

Questão 18: No padrão Abstract Factory, a escolha da fábrica concreta é feita em tempo de compilação ou em tempo de execução?
a) Em tempo de compilação.
b) Em tempo de execução.
c) Depende da implementação específica do padrão Abstract Factory.
d) A escolha da fábrica concreta não é relevante no padrão Abstract Factory.

Questão 19: Qual é a principal desvantagem do padrão Abstract Factory?
a) Aumento da complexidade do código devido à introdução de várias classes e interfaces abstratas.
b) Dificuldade em estender ou adicionar novos tipos de objetos relacionados.
c) Baixa flexibilidade, uma vez que os objetos criados estão restritos às famílias definidas pela fábrica abstrata.
d) A necessidade de criar várias fábricas concretas para cada família de objetos relacionados.

Questão 20: Em um sistema que utiliza o padrão Abstract Factory, é possível trocar a fábrica em tempo de execução?
a) Sim, o padrão Abstract Factory permite a troca da fábrica em tempo de execução, fornecendo flexibilidade na escolha da implementação.
b) Não, a fábrica é definida em tempo de compilação e não pode ser trocada em tempo de execução.
c) A troca da fábrica em tempo de execução é possível, mas requer modificações no código do cliente.
d) O padrão Abstract Factory não tem suporte para a troca da fábrica em tempo de execução.

Gabarito:

1) b
2) c
3) c
4) a
5) c
6) b
7) d
8) c
9) a
10) a
11) a
12) a
13) d
14) c
15) a
16) c
17) b
18) b
19) c
20) a

## Builder

1. O padrão Builder pertence a qual categoria de padrões de projeto?
a) Padrões de criação
b) Padrões estruturais
c) Padrões comportamentais
d) Padrões arquiteturais

2. Qual é o principal objetivo do padrão Builder?
a) Criar objetos imutáveis
b) Separar o processo de construção de um objeto complexo de sua representação
c) Gerenciar a comunicação entre objetos
d) Implementar a lógica de negócio em um objeto

3. Quais são os principais elementos do padrão Builder?
a) Builder, AbstractFactory, Product
b) Builder, ConcreteBuilder, Product
c) FactoryMethod, AbstractFactory, Product
d) Adapter, Builder, Product

4. O que é um ConcreteBuilder no padrão Builder?
a) Uma interface que define os métodos para construir as partes do objeto
b) Uma implementação concreta do Builder que fornece a implementação específica para construir o objeto
c) O objeto complexo sendo construído
d) O diretor responsável pela coordenação do processo de construção

5. O padrão Builder é útil quando a criação de um objeto requer uma sequência específica de etapas.
a) Verdadeiro
b) Falso

6. Quem é responsável por chamar os métodos do Builder na sequência correta durante o processo de construção?
a) ConcreteBuilder
b) Diretor
c) Produto
d) Cliente

7. O padrão Builder permite a criação de objetos com diferentes configurações.
a) Verdadeiro
b) Falso

8. O padrão Builder é considerado um padrão de projeto creacional porque lida com a criação de objetos.
a) Verdadeiro
b) Falso

9. O padrão Builder pode ser implementado em várias linguagens de programação.
a) Verdadeiro
b) Falso

10. Qual é o principal benefício do padrão Builder?
a) Encapsulamento
b) Herança
c) Polimorfismo
d) Abstração

11. O padrão Builder é usado para criar uma hierarquia de objetos.
a) Verdadeiro
b) Falso

12. O padrão Builder é uma alternativa ao uso de construtores com muitos parâmetros.
a) Verdadeiro
b) Falso

13. Quais são as etapas típicas do padrão Builder?
a) Configuração de propriedades do objeto
b) Criação do objeto
c) Invocação de métodos do objeto
d) Definição de interfaces

14. O padrão Builder viola o princípio de design SOLID chamado Princípio da Responsabilidade Única.
a) Verdadeiro
b) Falso

15. No padrão Builder, o Diretor é obrigatório e sempre presente.
a) Verdadeiro
b) Falso

16. O padrão Builder permite que o cliente defina manualmente todas as etapas de construção do objeto.
a) Verdadeiro
b) Falso

17. O padrão Builder é uma solução eficiente para objetos simples e com poucas propriedades.
a) Verdadeiro
b) Falso

18. O padrão Builder é frequent

emente usado em conjunto com qual outro padrão de projeto?
a) Singleton
b) Adapter
c) Observer
d) Prototype

19. No padrão Builder, o objeto final é obtido através do método `build()` do ConcreteBuilder.
a) Verdadeiro
b) Falso

20. Qual é a principal desvantagem do padrão Builder?
a) Complexidade adicional de implementação
b) Rigidez na criação de objetos
c) Dificuldade em lidar com herança
d) Baixa legibilidade do código

Respostas:
1. a) Padrões de criação
2. b) Separar o processo de construção de um objeto complexo de sua representação
3. b) Builder, ConcreteBuilder, Product
4. b) Uma implementação concreta do Builder que fornece a implementação específica para construir o objeto
5. a) Verdadeiro
6. b) Diretor
7. a) Verdadeiro
8. a) Verdadeiro
9. a) Verdadeiro
10. a) Encapsulamento
11. b) Falso
12. a) Verdadeiro
13. a) Configuração de propriedades do objeto
14. b) Falso
15. b) Falso
16. b) Falso
17. b) Falso
18. a) Singleton
19. a) Verdadeiro
20. a) Complexidade adicional de implementação
