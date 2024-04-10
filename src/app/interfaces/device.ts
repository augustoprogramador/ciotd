export interface Command {
    command: string // Sequencia de bytes enviados para execução do comando
    parameters: Array<Parameter> //  Lista de parâmetros aceitas pelo comando
}

export interface CommandDescription {
    operation: string // Nome da operação executada pelo dispositivo
    description: string // Descrição e detalhes adicionais sobre a operação e/ou o comando
    command: Command // Id do comando associado
    result: string // Descrição do resultado esperado da execução do comando
    format: string // Definição, usando o padrão OpenAPI para especificação de schemas de dados, do formato dos dados retornados pelo comando
}

export interface Device {
    identifier: string // Identificador do dispositivo
    description: string // Descrição do dispositivo, incluindo detalhes do seu uso e das informações geradas
    manufacturer: string // Nome do fabricante do dispositivo
    url: string // URL de acesso ao dispositivo
    commands: Array<Command> // Lista de comandos disponibilizada pelo dispositivo
    //   $ref: '#/components/schemas/CommandDescription'
}

export interface DeviceList {
    items: Array<string> // Identificador do dispositivo
}

export interface Parameter {
    name: string // Nome do parâmetro
    description: string // Descrição do parâmetro, incluindo detalhes de sua utilização, valores possíveis e funcionamento experado da operação de acordo com esses valores
}

export interface User {
    username: string
    senha: string
}

export interface UserDevice {
    deviceId: Array<string>
    username: string
}