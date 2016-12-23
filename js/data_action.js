data_action = [
    {
        title: "Atacar",
        icon: "crossed-swords",
        subtitle: "Cuerpo a cuerpo o a distancia",
        description: "Realiza un ataque cuerpo a cuerpo o a distancia con tu arma",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Algunas caracteristicas, como la caracteristica <i>Ataque Adicional</i> del guerrero, te permiten realizar mas de un ataque con esta acción. Cada uno de estos ataques es una tirada separada y puede tener como objetivo diferentes criaturas. Puedes moverte entre estos ataques.",
            "Cuando ataques con un arma cuerpo a cuerpo ligera, puedes usar una acción adicional para atacar con tu otra mano (ver la accion adicional <i>Ataque secundario</i>).",
            "Puedes reemplazar uno de tus ataques cuerpo a cuerpo con un <i>Agarre</i> o un <i>Empujon</i>.",
            "Algunas condiciones otorgan ventaja al ataque: ataques contra objetivos cegados, paralizados, petrificados, amarrados, aturdidos o inconscientes; melee attacks against prone targets; ataques por atacantes invisibles o escondidos.",
            "Algunas condiciones dan desventaja al ataque: ataques contra objetivos invisibles o escondidos; ataques a distancia contra objetivos tumbados; ataques hechos por atacantes cegados, asustados, envenenados o amarrados."
        ]
    },
    {
        title: "Agarrar",
        icon: "grab",
        subtitle: "Ataque cuerpo a cuerpo especial",
        description: "Intenta agarrar a una criatura o luchar con ella",
        reference: "PHB, pg. 195.",
        bullets: [
            "Puedes usar la accion <i>Atacar</i> para realizar un ataque cuerpo a cuerpo especial, un agarre. Si eres capaz de realizar multiples ataques con la accion Atacar, este ataque reemplaza uno de ellos.",
            "El objetivo de tu agarre no debe ser mas de un tamaño mas grade que tu y debe estar a tu alcance.",
            "Usando al menos una mano libre, intentas agarrar al objetivo realizando una tirada de Fuerza (Atletismo) contra la tirada  Fuerza (Atletismo) o Destreza (Acrobacias) del objetivo (el objetivo escoge que habilidad usar).",
            "Si eres ganas la contienda sometes al objetivo a la condicion agarrado (su velocidad se reduce a 0)."
        ]
    },
    {
        title: "Empujar",
        icon: "hand",
        subtitle: "Ataque cuerpo a cuerpo especial",
        description: "Empuja a una criatura, ya sea para tumbarla o alejarla de ti",
        reference: "PHB, pg. 195.",
        bullets: [
            "Puedes usar la accion <i>Atacar</i> para realizar un ataque cuerpo a cuerpo especial para empujar a una criatura. Si eres capaz de realizar multiples ataques con la accion Atacar, este ataque reemplaza uno de ellos.",
            "El objetivo de tu empujon no debe ser mas de un tamaño mas grade que tu y debe estar a tu alcance.",
            "Realizas una tirada de Fuerza (Atletismo) contra la tirada de Fuerza (Atletismo) o Destreza (Acrobacias) del objetivo (el objetivo escoge que habilidad usar).",
            "Si ganas la contienda puedes o tumbar al objetivo o alejarlo 5 pies de ti."
        ]
    },
    {
        title: "Lanzar un hechizo",
        icon: "magic-swirl",
        subtitle: "Tiempo de lanzamiento de 1 accion",
        description: "Lanzas un hechizo con un tiempo de lanzamiento de 1 accion",
        reference: "PHB, pg. 192.",
        bullets: [
            "No puedes lanzar un hechizo con tu accion y un hechizo diferente con tu accion adicional en el mismo turno, excepto si la accion es usada para lanzar un truco.",
            "El objetivo de un hechizo debe estar dentro del rango del hechizo. Para tener un objetivo debes tener linea de vision sobre él, asi que no puede estar tras cobertura total.",
            "Hechizos con componentes materiales no consumen el componente material a menos que este explicitamente escrito. A menos que el costo de un material este establecido, puedes asumir que el costo es insignificante y el material simplemente esta disponible en tu bolsa de componentes.",
            "Algunos hechizos requieren que mantengas concentracion para mantener su magia activa. Si pierdes concentracion dicho hechizo finaliza. Pierdes concentracion de un hechizo si lanzas otro hechizo que requiera concentracion o cuando eres incapacitado. Cada vez que recibes daño debes realizar una tirada de salvacion de Constitucion para mantener concentracion. El DC es igual a 10 o la mitad del daño que recibiste, el que sea mas alto."
        ]
    },
    {
        title: "Correr",
        icon: "sprint",
        subtitle: "Doble velocidad de movimiento",
        description: "Obtienes moviento adicional por el turno",
        reference: "PHB, pg. 192.",
        bullets: [
            "El incremento es igual a tu velocidad despues de aplicado cualquier modificador."
        ]
    },
    {
        title: "Eludir",
        icon: "journey",
        subtitle: "Previene ataques de oportunidad",
        description: "Tu movimiento no provoca ataques de oportunidad por el resto del turno",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquivar",
        icon: "aura",
        subtitle: "Incrementa tus reflejos",
        description: "Te enfocas completamente en evitar ataques",
        reference: "PHB, pg. 192.",
        bullets: [
            "Hasta el inicio de tu siguiente turno cualquier tirada de ataque realizado contra ti tiene desventaja si puedes ver al atacante y realizas tiradas de salvacion de Destreza con ventaja.",
            "Pierdes este beneficio si eres <i>incapacitado</i> o si tu velocidad se reduce a 0."
        ]
    },
    {
        title: "Escapar",
        icon: "manacles",
        subtitle: "Escapar un agarre",
        description: "Escapar un agarre",
        reference: "PHB, pg. 195.",
        bullets: [
            "Para escapar un agarre debes superar una tirada de Fuerza (Atletismo) o Destreza (Acrobacias) contra la tirada de Fuerza (Atletismo) de tu agarrador.",
            "Escapar otras condiciones que te inmovilizan (como grilletes) podrian requerir una tirada de Fuerza o Destreza, especificada por la condicion."
        ]
    },
    {
        title: "Ayudar",
        icon: "telepathy",
        subtitle: "Otorga ventaja a un aliado",
        description: "Otorga ventaja a un aliado en una tirada de habilidad o de ataque",
        reference: "PHB, pg. 192.",
        bullets: [
            "El objetivo obtiene la ventaja en la siguiente tirada de habilidad que realice para cumplir la tarea con la cual lo estas ayudando.",
            "Alternativamente, el objetivo obtiene ventaja a la siguiente tirada de ataque contra una criatura a 5 pies de ti.",
            "La ventaja dura hasta el inicio de tu siguiente turno."
        ]
    },
    {
        title: "Usar Objecto",
        icon: "snatch",
        subtitle: "Interactuar, usar habilidades especiales",
        description: "Interactua con un segundo objecto o usa una habilidad especial del objecto",
        reference: "PHB, pg. 193.",
        bullets: [
            "Puedes interactuar gratis con un objeto durante tu turno (como desnvainar tu arma o abrir una puerta). Si quieres interactuar con un segundo objeto usa esta accion.",
            "Cunado un objeto requiere una accion para su uso tambien tomas esta accion."
        ]
    },
    {
        title: "Usar escudo",
        icon: "round-shield",
        subtitle: "Equipar o desequipar un escudo",
        description: "Equipar o desequipar un escudo",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Un escudo siempre toma una accion para equipar o desequipar.",
            "Armaduras toman varios minutos para equipar o desequipar."
        ]
    },
    {
        title: "Esconderse",
        icon: "hood",
        subtitle: "",
        description: "Intentas esconderte",
        reference: "PHB, pg. 192.",
        bullets: [
            "No puedes esconderte de una criatura que puede verte. Debes tener cobertura total, estar en un area altamente oscurecida, ser invisible o bloquear la vision del enemigo de alguna manera.",
            "Si haces ruido (como gritar una advertencia o derribar un envase), das tu posicion.",
            "Cuando intentes esconderte realiza una tirada de Destreza (Sigilo) y anota el resultado. Hasta que seas descubierto o dejes de esconderte, el total de esa tirada es disputado por la tirada de Sabiduria (Percepcion) de cualquier criatura que busque activamente por señas de tu presencia.",
            "Una criatura te nota incluso si no esta buscando a menos que tu tirada de Sigilo sea mayor que su Percepcion Pasiva.",
            "Fuera de combate tambien puedes usar una tirada de Destreza (Sigilo) para actos como escaparte de enemigos, ocultarse de guardias, escabullirse sin ser notado o acercarsele a alguien sin ser viso u oido."
        ]
    },
    {
        title: "Buscar",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Dedicas tu atencion a encontrar algo",
        reference: "PHB, pg. 193.",
        bullets: [
            "Dependiendo de la naturaleza de tu busqueda el DM podria hacerte realizar una tirada de Sabiduria (Percepcion) o una tirada de Inteligencia (Investigacion)."
        ]
    },
    {
        title: "Preparar",
        icon: "stopwatch",
        subtitle: "Escoge un desencadenante para", 
        "una accion",
        description: "Escoge un desencadenante y una respuesta en forma de reaccion",
        reference: "PHB, pg. 193.",
        bullets: [
            "Primero decide que circunstancia percivible desencadenara tu reaccion.",
            "Luego escoge la accion que tomaras en respuesta a ese desencadenante o escoge moverte el total de tu velocidad en respuesta.",
            "Cuando el desencadenante ocurra puedes tomar tu reccion despues que finalice o ignorarlo.",
            "Cuando preparas un hechizo lo lanzas de manera normal pero contienes su energia, la cual liberas con tu reaccion cuando el desencadenante ocurra. Para ser preparado, un hechizo debe tener un tiempo de lanzamiento de 1 accion y contener la magia del hechizo requiere concentracion."
        ]
    },
    {
        title: "Usar una caracteristica de clase",
        icon: "embrassed-energy",
        subtitle: "Algunas caracteristicas usan acciones",
        description: "Usa una caracteristica racial o de clase que use una accion",
        reference: "Ver la pagina de la clase para mas informacion.",
        bullets: [

        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "Cualquier accion que no este en esta lista",
        description: "Realiza cualquier accion que puedas imaginar",
        reference: "PHB, pg. 193.",
        bullets: [
            "Cuando describes una accion no detallada en ningun lugar en las reglas, el DM decide si la accion es posible y que tipo de tirada, de requerir alguna, debe ser realizada para determinar su exito o fracaso."
        ]
    }
]
