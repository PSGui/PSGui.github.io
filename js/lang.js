"use strict";

const translations = {
        pt: {
                document: {
                        home: {
                                title:
                                        "Guilherme Braga | Portefólio de Engenharia",

                                description:
                                        "Portefólio de projetos desenvolvidos durante a Licenciatura em Engenharia Eletrotécnica e de Computadores."
                        },

                        nmea: {
                                title:
                                        "Projeto NMEA 2000 | Guilherme Braga",

                                description:
                                        "Desenvolvimento de um módulo de aquisição de dados para integração em sistemas NMEA 2000."
                        },

                        fortyTwo: {
                                title:
                                        "Projetos 42 | Guilherme Braga",

                                description:
                                        "Projetos desenvolvidos por Guilherme Braga durante o percurso na 42 Porto."
                        }
                },

                language: {
                        selector:
                                "Selecionar idioma",

                        portuguese:
                                "Mudar idioma para português",

                        english:
                                "Mudar idioma para inglês"
                },

                nav: {
                        home:
                                "Início",

                        about:
                                "Sobre",

                        skills:
                                "Competências",

                        projects:
                                "Projetos",

                        contacts:
                                "Contactos"
                },

                home: {
                        hero: {
                                label:
                                        "Engenharia Eletrotécnica e de Computadores",

                                title:
                                        "Projetos académicos e pessoais de engenharia",

                                description:
                                        "Portefólio de projetos desenvolvidos nas áreas de eletrónica, sistemas embebidos, automação, comunicações e software.",

                                viewProjects:
                                        "Ver projetos",

                                about:
                                        "Sobre mim"
                        },

                        about: {
                                label:
                                        "Perfil",

                                title:
                                        "Sobre mim",

                                photoAlt:
                                        "Fotografia de Guilherme Braga",

                                paragraphOne:
                                        "Sou licenciado em Engenharia Eletrotécnica e de Computadores pelo ISEP (Instituto Superior de Engenharia do Porto) e tenho particular interesse por automação industrial, eletrónica, desenvolvimento de hardware, sistemas embebidos e software.",

                                paragraphTwo:
                                        "Durante a licenciatura desenvolvi projetos, tanto pessoais como académicos, que me permitiram trabalhar com programação, desenho de PCBs, microcontroladores, comunicações e análise de sistemas.",

                                paragraphThree:
                                        "Decidi criar este portefólio em formato Web como forma de partilhar o meu trabalho de uma maneira mais acessível, organizada e interativa."
                        },

                        skills: {
                                label:
                                        "Perfil técnico",

                                title:
                                        "Programação e ferramentas",

                                description:
                                        "Tecnologias e ferramentas utilizadas no desenvolvimento dos meus projetos académicos e pessoais.",

                                programming:
                                        "Programação",

                                tools:
                                        "Ferramentas",

                                programmingAlt:
                                        "Ícones de C, C++, HTML, CSS, Python e SQLite",

                                toolsAlt:
                                        "Ícones de Linux, Vim, Visual Studio Code, Git e GitHub",

                                engineeringCategory:
                                        "Eletrónica e sistemas embebidos",

                                engineeringTitle:
                                        "Ferramentas de engenharia"
                        },

                        projects: {
                                label:
                                        "Portefólio",

                                title:
                                        "Projetos em destaque",

                                description:
                                        "Projetos de hardware, sistemas embebidos, engenharia e desenvolvimento de software.",

                                nmea: {
                                        category:
                                                "Hardware e sistemas embebidos",

                                        title:
                                                "Módulo de aquisição NMEA 2000",

                                        description:
                                                "Desenvolvimento de uma PCB para aquisição de sinais analógicos e digitais em ambiente naval, com processamento local, comunicação CAN isolada e publicação remota de dados através de MQTT.",

                                        action:
                                                "Explorar projeto"
                                },

                                monitor: {
                                        category:
                                                "Engenharia e sistemas embebidos",

                                        title:
                                                "Monitor Ambiental Industrial",

                                        description:
                                                "Sistema de monitorização de temperatura, humidade e condensação para utilização em ambientes industriais, com alarme e envio de dados através de MQTT.",

                                        monitoring:
                                                "Monitorização",

                                        status:
                                                "Projeto em curso"
                                },

                                school: {
                                        category:
                                                "Programação e sistemas",

                                        title:
                                                "Projetos 42",

                                        description:
                                                "Projetos desenvolvidos no percurso da 42, com foco em programação em C, gestão de memória, Linux, UNIX e comunicação entre processos.",

                                        action:
                                                "Explorar projetos"
                                }
                        },

                        contacts: {
                                label:
                                        "Contacto",

                                title:
                                        "Contactos",

                                description:
                                        "Ligações para o meu trabalho e perfil profissional."
                        }
                },

                nmea: {
                        back:
                                "Voltar ao portefólio",

                        hero: {
                                label:
                                        "Projeto de estágio · OSTIUM",

                                title:
                                        "Módulo de aquisição de dados para integração em sistemas <span>NMEA 2000</span>",

                                description:
                                        "Desenvolvimento de uma placa eletrónica capaz de adquirir sinais analógicos e digitais, processar os valores localmente e disponibilizar os dados através de CAN e MQTT.",

                                imageAlt:
                                        "PCB desenvolvida para o módulo de aquisição NMEA 2000"
                        },

                        stats: {
                                analogue:
                                        "Entradas analógicas",

                                digital:
                                        "Entradas digitais",

                                digitalDetail:
                                        "Isoladas por optoacoplador",

                                converters:
                                        "Conversores ADS1115",

                                converterDetail:
                                        "ADC de 16 bits por I²C",

                                can:
                                        "Comunicação CAN"
                        },

                        problem: {
                                label:
                                        "Enquadramento",

                                title:
                                        "O problema",

                                description:
                                        "Realizar a sensorização de embarcações com sensores convencionais e disponibilizar os dados para utilização, quer localmente através de CAN, quer remotamente através de Wi-Fi e MQTT.",

                                mainTitle:
                                        "Integrar sensores convencionais numa rede digital",

                                mainParagraphOne:
                                        "Muitas embarcações continuam equipadas com sensores analógicos utilizados para medir nível, pressão, temperatura e outras grandezas.",

                                mainParagraphTwo:
                                        "O objetivo foi desenvolver uma interface capaz de adquirir esses sinais, condicioná-los e prepará-los para integração num sistema baseado em NMEA 2000.",

                                signalsTitle:
                                        "Diferentes sinais",

                                signalsDescription:
                                        "Entradas em tensão, corrente e sinais digitais com diferentes níveis elétricos.",

                                environmentTitle:
                                        "Ambiente exigente",

                                environmentDescription:
                                        "Ruído eletromagnético, transitórios elétricos e diferenças entre referências de massa.",

                                integrationTitle:
                                        "Integração",

                                integrationDescription:
                                        "Comunicação local através de CAN e monitorização remota através de Wi-Fi e MQTT."
                        },

                        architecture: {
                                label:
                                        "Arquitetura",

                                title:
                                        "Fluxo funcional",

                                description:
                                        "A arquitetura separou a aquisição, o condicionamento, o processamento local e as interfaces de comunicação.",

                                sensorsTitle:
                                        "Sensores",

                                sensorsDescription:
                                        "Sinais analógicos de tensão e corrente e entradas digitais provenientes da embarcação.",

                                conditioningTitle:
                                        "Condicionamento",

                                conditioningDescription:
                                        "Divisores de tensão, resistências de shunt, proteção elétrica e seleção através de jumpers.",

                                processingTitle:
                                        "Processamento",

                                processingDescription:
                                        "Quatro ADS1115 comunicam por I²C com o ESP32, responsável pelo processamento dos dados.",

                                communicationTitle:
                                        "Comunicação",

                                communicationDescription:
                                        "Disponibilização dos dados através de CAN e publicação remota através de MQTT."
                        },

                        development: {
                                label:
                                        "Implementação",

                                title:
                                        "Hardware e firmware",

                                hardware: {
                                        category:
                                                "Eletrónica",

                                        title:
                                                "Hardware desenvolvido",

                                        powerTitle:
                                                "Alimentação",

                                        powerDescription:
                                                "Proteção TVS, filtro π, conversor buck para 5 V e regulador LDO para 3,3 V.",

                                        analogueTitle:
                                                "Aquisição analógica",

                                        analogueDescription:
                                                "Dezasseis canais configuráveis para sinais de 0–10 V ou 4–20 mA.",

                                        digitalTitle:
                                                "Aquisição digital",

                                        digitalDescription:
                                                "Oito entradas desacopladas através de optoacopladores, com lógica invertida.",

                                        canTitle:
                                                "Comunicação CAN",

                                        canDescription:
                                                "Interface física baseada no transceiver isolado ISO1044.",

                                        constructionTitle:
                                                "Construção",

                                        constructionDescription:
                                                "PCB compacta concebida no KiCad para montagem numa caixa de calha DIN."
                                },

                                firmware: {
                                        category:
                                                "Sistemas embebidos",

                                        title:
                                                "Firmware desenvolvido",

                                        modularTitle:
                                                "Estrutura modular",

                                        modularDescription:
                                                "Separação entre aquisição analógica, entradas digitais, CAN, MQTT, armazenamento e configuração.",

                                        storageTitle:
                                                "Configuração persistente",

                                        storageDescription:
                                                "Utilização da memória NVS para guardar parâmetros após reinício ou perda de alimentação.",

                                        serialTitle:
                                                "Interface série",

                                        serialDescription:
                                                "Comandos para diagnóstico, alteração de parâmetros e configuração da placa.",

                                        mqttDescription:
                                                "Publicação periódica das entradas analógicas e digitais numa mensagem JSON.",

                                        dashboardDescription:
                                                "Página Web auxiliar para acompanhar leituras e estados das comunicações."
                                }
                        },

                        tests: {
                                label:
                                        "Validação experimental",

                                title:
                                        "Testes realizados",

                                description:
                                        "Os subsistemas foram testados individualmente antes da integração global.",

                                validated:
                                        "Validado",

                                canValidated:
                                        "CAN validado",

                                powerTitle:
                                        "Alimentação",

                                powerDescription:
                                        "Verificação das tensões de alimentação e do funcionamento dos principais blocos da PCB.",

                                i2cTitle:
                                        "Barramento I²C",

                                i2cDescription:
                                        "Deteção dos quatro ADS1115 e observação dos sinais SDA e SCL através do osciloscópio.",

                                analogueTitle:
                                        "Entradas analógicas",

                                analogueDescription:
                                        "Ensaios em tensão a 10 V e em corrente a 18,5 mA nos dezasseis canais.",

                                digitalTitle:
                                        "Entradas digitais",

                                digitalDescription:
                                        "Aplicação de 24 V para confirmar os optoacopladores e a lógica invertida.",

                                mqttDescription:
                                        "Ligação à rede e publicação remota das leituras adquiridas através de mensagens JSON.",

                                canTitle:
                                        "Comunicação entre placas",

                                canDescription:
                                        "Transmissão e receção de tramas CAN entre dois módulos utilizando identificadores de 29 bits."
                        },

                        debug: {
                                label:
                                        "Engenharia na prática",

                                title:
                                        "Um problema identificado durante os testes",

                                paragraphOne:
                                        "Durante os primeiros ensaios, o barramento CAN não apresentou os níveis elétricos esperados.",

                                paragraphTwo:
                                        "A análise do circuito permitiu concluir que o lado CAN do transceiver ISO1044 estava a ser alimentado com 3,3 V isolados, apesar de necessitar de uma alimentação compreendida entre 4,5 V e 5,5 V.",

                                paragraphThree:
                                        "O conversor DC/DC isolado foi substituído por uma versão com saída de 5 V. Após esta correção, as duas placas transmitiram e receberam mensagens sem erros de comunicação.",

                                before:
                                        "Antes",

                                beforeVoltage:
                                        "3,3 V isolados",

                                beforeDescription:
                                        "Alimentação incompatível com o lado CAN do ISO1044",

                                correction:
                                        "Correção",

                                afterVoltage:
                                        "5 V isolados",

                                afterDescription:
                                        "Comunicação CAN estabelecida entre as duas placas"
                        },

                        results: {
                                label:
                                        "Resultado",

                                title:
                                        "Uma primeira versão funcional e validada por subsistemas",

                                paragraphOne:
                                        "O projeto demonstrou o funcionamento da aquisição analógica e digital, do processamento local, da comunicação MQTT e da camada CAN entre duas placas.",

                                paragraphTwo:
                                        "A integração completa numa rede NMEA 2000 real, com equipamentos comerciais e PGNs finais da aplicação, permaneceu como etapa futura.",

                                pcb:
                                        "PCB desenvolvida",

                                firmware:
                                        "Firmware funcional",

                                mqtt:
                                        "MQTT validado",

                                can:
                                        "CAN validado"
                        }
                },

                fortyTwo: {
                        back:
                                "Voltar ao portefólio",

                        hero: {
                                label:
                                        "Programação e sistemas",

                                title:
                                        "Projetos desenvolvidos na <span class=\"highlight-text\">42 PORTO</span>",

                                description:
                                        "Uma coleção de projetos centrados em programação em C, resolução de problemas, gestão de memória, sistemas UNIX, comunicação entre processos e desenvolvimento gráfico.",

                                animationAlt:
                                        "Número 42 formado por caracteres em movimento"
                        },

                        projects: {
                                label:
                                        "Percurso 42",

                                title:
                                        "Projetos",

                                description:
                                        "Cada projeto introduziu novos problemas e exigiu uma compreensão progressivamente mais profunda da linguagem C, dos sistemas UNIX e da organização de software.",

                                repository:
                                        "Ver repositório",

                                libft: {
                                        category:
                                                "Biblioteca em C",

                                        description:
                                                "Criação de uma biblioteca própria através da reimplementação das funções padrão da linguagem C. Foi o primeiro projeto e permitiu construir uma base sólida para os projetos subsequentes."
                                },

                                printf: {
                                        category:
                                                "Formatação de texto",

                                        description:
                                                "Reimplementação da função printf. Um projeto particularmente interessante por envolver a criação de uma função capaz de aceitar um número variável de argumentos."
                                },

                                gnl: {
                                        category:
                                                "Leitura de ficheiros",

                                        description:
                                                "Desenvolvimento de uma função capaz de ler um ficheiro linha a linha, mantendo o estado entre chamadas e controlando corretamente a memória dinâmica."
                                },

                                minitalk: {
                                        category:
                                                "Comunicação entre processos",

                                        description:
                                                "Implementação de um sistema cliente-servidor que transmite mensagens entre processos utilizando exclusivamente sinais UNIX."
                                },

                                soLong: {
                                        category:
                                                "Programação gráfica",

                                        description:
                                                "Desenvolvimento de um pequeno jogo 2D, incluindo leitura e validação de mapas, movimentação do jogador, recolha de objetos, deteção de colisões e representação gráfica através da MiniLibX."
                                }
                        }
                }
        },

        en: {
                document: {
                        home: {
                                title:
                                        "Guilherme Braga | Engineering Portfolio",

                                description:
                                        "Portfolio of projects developed during a Bachelor's Degree in Electrical and Computer Engineering."
                        },

                        nmea: {
                                title:
                                        "NMEA 2000 Project | Guilherme Braga",

                                description:
                                        "Development of a data acquisition module for integration into NMEA 2000 systems."
                        },

                        fortyTwo: {
                                title:
                                        "42 Projects | Guilherme Braga",

                                description:
                                        "Projects developed by Guilherme Braga during the 42 Porto curriculum."
                        }
                },

                language: {
                        selector:
                                "Select language",

                        portuguese:
                                "Switch language to Portuguese",

                        english:
                                "Switch language to English"
                },

                nav: {
                        home:
                                "Home",

                        about:
                                "About",

                        skills:
                                "Skills",

                        projects:
                                "Projects",

                        contacts:
                                "Contacts"
                },

                home: {
                        hero: {
                                label:
                                        "Electrical and Computer Engineering",

                                title:
                                        "Academic and personal engineering projects",

                                description:
                                        "Portfolio of projects developed in electronics, embedded systems, automation, communications and software.",

                                viewProjects:
                                        "View projects",

                                about:
                                        "About me"
                        },

                        about: {
                                label:
                                        "Profile",

                                title:
                                        "About me",

                                photoAlt:
                                        "Photograph of Guilherme Braga",

                                paragraphOne:
                                        "I hold a Bachelor's Degree in Electrical and Computer Engineering from ISEP, the Porto School of Engineering, and I have a particular interest in industrial automation, electronics, hardware development, embedded systems and software.",

                                paragraphTwo:
                                        "During my degree, I developed both personal and academic projects that allowed me to work with programming, PCB design, microcontrollers, communication systems and systems analysis.",

                                paragraphThree:
                                        "I created this Web portfolio to present and share my work in a more accessible, organised and interactive way."
                        },

                        skills: {
                                label:
                                        "Technical profile",

                                title:
                                        "Programming and tools",

                                description:
                                        "Technologies and tools used in the development of my academic and personal projects.",

                                programming:
                                        "Programming",

                                tools:
                                        "Tools",

                                programmingAlt:
                                        "Icons for C, C++, HTML, CSS, Python and SQLite",

                                toolsAlt:
                                        "Icons for Linux, Vim, Visual Studio Code, Git and GitHub",

                                engineeringCategory:
                                        "Electronics and embedded systems",

                                engineeringTitle:
                                        "Engineering tools"
                        },

                        projects: {
                                label:
                                        "Portfolio",

                                title:
                                        "Featured projects",

                                description:
                                        "Hardware, embedded systems, engineering and software development projects.",

                                nmea: {
                                        category:
                                                "Hardware and embedded systems",

                                        title:
                                                "NMEA 2000 data acquisition module",

                                        description:
                                                "Development of a PCB for acquiring analogue and digital signals in a marine environment, with local processing, isolated CAN communication and remote data publication through MQTT.",

                                        action:
                                                "Explore project"
                                },

                                monitor: {
                                        category:
                                                "Engineering and embedded systems",

                                        title:
                                                "Industrial Environmental Monitor",

                                        description:
                                                "Temperature, humidity and condensation monitoring system for industrial environments, with an alarm and data transmission through MQTT.",

                                        monitoring:
                                                "Monitoring",

                                        status:
                                                "Project in progress"
                                },

                                school: {
                                        category:
                                                "Programming and systems",

                                        title:
                                                "42 projects",

                                        description:
                                                "Projects developed during the 42 curriculum, focused on C programming, memory management, Linux, UNIX and inter-process communication.",

                                        action:
                                                "Explore projects"
                                }
                        },

                        contacts: {
                                label:
                                        "Contact",

                                title:
                                        "Contacts",

                                description:
                                        "Links to my work and professional profile."
                        }
                },

                nmea: {
                        back:
                                "Back to portfolio",

                        hero: {
                                label:
                                        "Internship project · OSTIUM",

                                title:
                                        "Data acquisition module for integration into <span>NMEA 2000</span> systems",

                                description:
                                        "Development of an electronic board capable of acquiring analogue and digital signals, processing the values locally and making the data available through CAN and MQTT.",

                                imageAlt:
                                        "PCB developed for the NMEA 2000 data acquisition module"
                        },

                        stats: {
                                analogue:
                                        "Analogue inputs",

                                digital:
                                        "Digital inputs",

                                digitalDetail:
                                        "Isolated using optocouplers",

                                converters:
                                        "ADS1115 converters",

                                converterDetail:
                                        "16-bit ADC through I²C",

                                can:
                                        "CAN communication"
                        },

                        problem: {
                                label:
                                        "Context",

                                title:
                                        "The problem",

                                description:
                                        "To instrument vessels using conventional sensors and make the data available locally through CAN or remotely through Wi-Fi and MQTT.",

                                mainTitle:
                                        "Integrating conventional sensors into a digital network",

                                mainParagraphOne:
                                        "Many vessels are still equipped with analogue sensors used to measure level, pressure, temperature and other variables.",

                                mainParagraphTwo:
                                        "The goal was to develop an interface capable of acquiring and conditioning these signals and preparing them for integration into an NMEA 2000-based system.",

                                signalsTitle:
                                        "Different signals",

                                signalsDescription:
                                        "Voltage, current and digital inputs with different electrical levels.",

                                environmentTitle:
                                        "Demanding environment",

                                environmentDescription:
                                        "Electromagnetic noise, electrical transients and differences between ground references.",

                                integrationTitle:
                                        "Integration",

                                integrationDescription:
                                        "Local communication through CAN and remote monitoring through Wi-Fi and MQTT."
                        },

                        architecture: {
                                label:
                                        "Architecture",

                                title:
                                        "Functional flow",

                                description:
                                        "The architecture separated acquisition, signal conditioning, local processing and communication interfaces.",

                                sensorsTitle:
                                        "Sensors",

                                sensorsDescription:
                                        "Analogue voltage and current signals and digital inputs originating from the vessel.",

                                conditioningTitle:
                                        "Signal conditioning",

                                conditioningDescription:
                                        "Voltage dividers, shunt resistors, electrical protection and jumper-based selection.",

                                processingTitle:
                                        "Processing",

                                processingDescription:
                                        "Four ADS1115 converters communicate through I²C with the ESP32, which is responsible for processing the data.",

                                communicationTitle:
                                        "Communication",

                                communicationDescription:
                                        "Data availability through CAN and remote publication through MQTT."
                        },

                        development: {
                                label:
                                        "Implementation",

                                title:
                                        "Hardware and firmware",

                                hardware: {
                                        category:
                                                "Electronics",

                                        title:
                                                "Hardware development",

                                        powerTitle:
                                                "Power supply",

                                        powerDescription:
                                                "TVS protection, π filter, buck converter for 5 V and an LDO regulator for 3.3 V.",

                                        analogueTitle:
                                                "Analogue acquisition",

                                        analogueDescription:
                                                "Sixteen configurable channels for 0–10 V or 4–20 mA signals.",

                                        digitalTitle:
                                                "Digital acquisition",

                                        digitalDescription:
                                                "Eight inputs isolated using optocouplers, with inverted logic.",

                                        canTitle:
                                                "CAN communication",

                                        canDescription:
                                                "Physical interface based on the isolated ISO1044 transceiver.",

                                        constructionTitle:
                                                "Construction",

                                        constructionDescription:
                                                "Compact PCB designed in KiCad for installation inside a DIN-rail enclosure."
                                },

                                firmware: {
                                        category:
                                                "Embedded systems",

                                        title:
                                                "Firmware development",

                                        modularTitle:
                                                "Modular structure",

                                        modularDescription:
                                                "Separation between analogue acquisition, digital inputs, CAN, MQTT, storage and configuration.",

                                        storageTitle:
                                                "Persistent configuration",

                                        storageDescription:
                                                "Use of NVS memory to retain parameters after a restart or loss of power.",

                                        serialTitle:
                                                "Serial interface",

                                        serialDescription:
                                                "Commands for diagnostics, parameter changes and board configuration.",

                                        mqttDescription:
                                                "Periodic publication of analogue and digital inputs in a JSON message.",

                                        dashboardDescription:
                                                "Auxiliary Web page for monitoring readings and communication states."
                                }
                        },

                        tests: {
                                label:
                                        "Experimental validation",

                                title:
                                        "Tests performed",

                                description:
                                        "The subsystems were tested individually before the overall integration.",

                                validated:
                                        "Validated",

                                canValidated:
                                        "CAN validated",

                                powerTitle:
                                        "Power supply",

                                powerDescription:
                                        "Verification of the supply voltages and operation of the main PCB blocks.",

                                i2cTitle:
                                        "I²C bus",

                                i2cDescription:
                                        "Detection of all four ADS1115 converters and observation of the SDA and SCL signals using an oscilloscope.",

                                analogueTitle:
                                        "Analogue inputs",

                                analogueDescription:
                                        "Voltage tests at 10 V and current tests at 18.5 mA across all sixteen channels.",

                                digitalTitle:
                                        "Digital inputs",

                                digitalDescription:
                                        "Application of 24 V to confirm the operation of the optocouplers and inverted logic.",

                                mqttDescription:
                                        "Network connection and remote publication of acquired readings through JSON messages.",

                                canTitle:
                                        "Communication between boards",

                                canDescription:
                                        "Transmission and reception of CAN frames between two modules using 29-bit identifiers."
                        },

                        debug: {
                                label:
                                        "Engineering in practice",

                                title:
                                        "A problem identified during testing",

                                paragraphOne:
                                        "During the initial tests, the CAN bus did not present the expected electrical levels.",

                                paragraphTwo:
                                        "Circuit analysis showed that the CAN side of the ISO1044 transceiver was being supplied with an isolated 3.3 V, although it required a supply between 4.5 V and 5.5 V.",

                                paragraphThree:
                                        "The isolated DC/DC converter was replaced with a version providing a 5 V output. After this correction, both boards transmitted and received messages without communication errors.",

                                before:
                                        "Before",

                                beforeVoltage:
                                        "Isolated 3.3 V",

                                beforeDescription:
                                        "Supply voltage incompatible with the CAN side of the ISO1044",

                                correction:
                                        "Correction",

                                afterVoltage:
                                        "Isolated 5 V",

                                afterDescription:
                                        "CAN communication established between both boards"
                        },

                        results: {
                                label:
                                        "Result",

                                title:
                                        "A first functional version validated at subsystem level",

                                paragraphOne:
                                        "The project demonstrated the operation of analogue and digital acquisition, local processing, MQTT communication and the CAN layer between two boards.",

                                paragraphTwo:
                                        "Complete integration into a real NMEA 2000 network, using commercial equipment and the application's final PGNs, remained a future stage.",

                                pcb:
                                        "PCB developed",

                                firmware:
                                        "Functional firmware",

                                mqtt:
                                        "MQTT validated",

                                can:
                                        "CAN validated"
                        }
                },

                fortyTwo: {
                        back:
                                "Back to portfolio",

                        hero: {
                                label:
                                        "Programming and systems",

                                title:
                                        "Projects developed at <span class=\"highlight-text\">42 PORTO</span>",

                                description:
                                        "A collection of projects focused on C programming, problem-solving, memory management, UNIX systems, inter-process communication and graphical development.",

                                animationAlt:
                                        "Number 42 formed by moving characters"
                        },

                        projects: {
                                label:
                                        "42 curriculum",

                                title:
                                        "Projects",

                                description:
                                        "Each project introduced new problems and required an increasingly deeper understanding of the C language, UNIX systems and software organisation.",

                                repository:
                                        "View repository",

                                libft: {
                                        category:
                                                "C library",

                                        description:
                                                "Creation of my own library by recreating standard C functions. This was the first project and established a solid foundation for the projects that followed."
                                },

                                printf: {
                                        category:
                                                "Text formatting",

                                        description:
                                                "Reimplementation of the printf function. This was a particularly interesting project because it involved creating a function capable of accepting a variable number of arguments."
                                },

                                gnl: {
                                        category:
                                                "File reading",

                                        description:
                                                "Development of a function capable of reading a file one line at a time, preserving its state between calls and correctly managing dynamic memory."
                                },

                                minitalk: {
                                        category:
                                                "Inter-process communication",

                                        description:
                                                "Implementation of a client-server system that transmits messages between processes using only UNIX signals."
                                },

                                soLong: {
                                        category:
                                                "Graphical programming",

                                        description:
                                                "Development of a small 2D game, including map reading and validation, player movement, object collection, collision detection and graphical rendering using MiniLibX."
                                }
                        }
                }
        }
};

function getTranslation(language, translationPath) {
        return translationPath
                .split(".")
                .reduce((currentValue, currentKey) => {
                        if (
                                currentValue === undefined ||
                                currentValue === null
                        ) {
                                return undefined;
                        }

                        return currentValue[currentKey];
                }, translations[language]);
}

function getCurrentPage() {
        const filename =
                window.location.pathname
                        .split("/")
                        .pop()
                        .toLowerCase();

        if (filename === "projeto-nmea2000.html") {
                return "nmea";
        }

        if (filename === "projetos-42.html") {
                return "fortyTwo";
        }

        return "home";
}

function translateTextElements(language) {
        const elements =
                document.querySelectorAll("[data-i18n]");

        elements.forEach((element) => {
                const translationPath =
                        element.dataset.i18n;

                const translatedText =
                        getTranslation(
                                language,
                                translationPath
                        );

                if (typeof translatedText === "string") {
                        element.textContent =
                                translatedText;
                }
        });
}

function translateHtmlElements(language) {
        const elements =
                document.querySelectorAll("[data-i18n-html]");

        elements.forEach((element) => {
                const translationPath =
                        element.dataset.i18nHtml;

                const translatedHtml =
                        getTranslation(
                                language,
                                translationPath
                        );

                if (typeof translatedHtml === "string") {
                        element.innerHTML =
                                translatedHtml;
                }
        });
}

function translateAttributes(language) {
        const elements =
                document.querySelectorAll(
                        "[data-i18n-attr]"
                );

        elements.forEach((element) => {
                const definitions =
                        element.dataset.i18nAttr.split(",");

                definitions.forEach((definition) => {
                        const separatorPosition =
                                definition.indexOf(":");

                        if (separatorPosition === -1) {
                                return;
                        }

                        const attributeName =
                                definition
                                        .slice(0, separatorPosition)
                                        .trim();

                        const translationPath =
                                definition
                                        .slice(separatorPosition + 1)
                                        .trim();

                        const translatedValue =
                                getTranslation(
                                        language,
                                        translationPath
                                );

                        if (
                                attributeName &&
                                typeof translatedValue === "string"
                        ) {
                                element.setAttribute(
                                        attributeName,
                                        translatedValue
                                );
                        }
                });
        });
}

function updateDocumentMetadata(language) {
        const currentPage =
                getCurrentPage();

        const translatedTitle =
                getTranslation(
                        language,
                        `document.${currentPage}.title`
                );

        const translatedDescription =
                getTranslation(
                        language,
                        `document.${currentPage}.description`
                );

        if (typeof translatedTitle === "string") {
                document.title =
                        translatedTitle;
        }

        const descriptionElement =
                document.querySelector(
                        'meta[name="description"]'
                );

        if (
                descriptionElement &&
                typeof translatedDescription === "string"
        ) {
                descriptionElement.setAttribute(
                        "content",
                        translatedDescription
                );
        }
}

function updateLanguageButtons(language) {
        const buttons =
                document.querySelectorAll(
                        ".language-button"
                );

        buttons.forEach((button) => {
                const isActive =
                        button.dataset.language === language;

                button.classList.toggle(
                        "active",
                        isActive
                );

                button.setAttribute(
                        "aria-pressed",
                        String(isActive)
                );
        });
}

function saveLanguage(language) {
        try {
                localStorage.setItem(
                        "portfolio-language",
                        language
                );
        } catch (error) {
                console.warn(
                        "Não foi possível guardar o idioma.",
                        error
                );
        }
}

function readStoredLanguage() {
        try {
                return localStorage.getItem(
                        "portfolio-language"
                );
        } catch (error) {
                return null;
        }
}

function applyLanguage(language) {
        const selectedLanguage =
                translations[language]
                        ? language
                        : "pt";

        document.documentElement.lang =
                selectedLanguage === "pt"
                        ? "pt-PT"
                        : "en";

        translateTextElements(selectedLanguage);
        translateHtmlElements(selectedLanguage);
        translateAttributes(selectedLanguage);
        updateDocumentMetadata(selectedLanguage);
        updateLanguageButtons(selectedLanguage);
        saveLanguage(selectedLanguage);
}

function initialiseLanguageSwitcher() {
        const storedLanguage =
                readStoredLanguage();

        const initialLanguage =
                translations[storedLanguage]
                        ? storedLanguage
                        : "pt";

        const buttons =
                document.querySelectorAll(
                        ".language-button"
                );

        buttons.forEach((button) => {
                button.addEventListener(
                        "click",
                        () => {
                                applyLanguage(
                                        button.dataset.language
                                );
                        }
                );
        });

        applyLanguage(initialLanguage);
}

if (document.readyState === "loading") {
        document.addEventListener(
                "DOMContentLoaded",
                initialiseLanguageSwitcher
        );
} else {
        initialiseLanguageSwitcher();
}