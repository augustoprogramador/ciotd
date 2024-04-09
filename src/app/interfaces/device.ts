export interface Command {
    command: string
    parameters: Array<Parameter>
}

export interface CommandDescription {
    operation: string
    description: string
    command: Command
    result: string
    format: string
}

export interface Device {
    identifier: string
    //   description: Identificador do dispositivo
    description: string
    //   description: Descrição do dispositivo, incluindo detalhes do seu uso e das informações geradas
    manufacturer: string
    //   description: Nome do fabricante do dispositivo
    url: string
    //   description: URL de acesso ao dispositivo
    commands: Array<Command>
    //   description: Lista de comandos disponibilizada pelo dispositivo
    items: Array<CommandDescription>
    //   $ref: '#/components/schemas/CommandDescription'
}

export interface DeviceList {
    items: Array<string>
}

export interface Parameter {
    name: string
    description: string
}