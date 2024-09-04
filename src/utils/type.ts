interface StringObject {
  [key: string]: string
}

interface NumberObject {
  [key: string]: number
}

interface BooleanObject {
  [key: string]: number
}

interface UnknownObject {
  [key: string]: unknown
}

interface ApiParams {
  headerParams?: StringObject
  bodyParams?: unknown
  restParams?: StringObject
  queryParams: UnknownObject
}

interface UploadFileType {
  fileName:string
  originalFilename: string
  previewUrl: string
}

export type {
  StringObject,
  NumberObject,
  BooleanObject,
  UnknownObject,
  ApiParams,
  UploadFileType
}
