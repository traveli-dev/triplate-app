import fs from 'fs'
import path from 'path'

type SearchFilesReturnType = {
  dir: string
  name: string
}

export const searchFiles = (dirPath: string): SearchFilesReturnType[] => {
  const allDirents = fs.readdirSync(dirPath, { withFileTypes: true })

  const files = []
  for (const dirent of allDirents) {
    if (dirent.isDirectory()) {
      const fp = path.join(dirPath, dirent.name)
      files.push(searchFiles(fp))
    } else if (dirent.isFile()) {
      const index = dirPath.indexOf('/storage/')
      const slicePath = dirPath.slice(index + '/storage/'.length)

      files.push({
        dir: path.join(dirPath, dirent.name),
        name: `${slicePath}/${dirent.name}`
      })
    }
  }

  return files.flat()
}
