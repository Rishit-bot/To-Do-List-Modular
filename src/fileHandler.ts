import * as fs from 'fs'

if (!fs.existsSync("./data.json")) {
    create("data.json", "[]")
}
const json = JSON.parse(fs.readFileSync("data.json", "utf-8"))

async function create(file: string, content: string) {
        try {
            await fs.writeFileSync(file, content, 'utf-8')
        } catch (err) {
            console.log(err)
        }
    }
export { create, json }