# Atek core ADB tables

```
npm install @atek-cloud/adb-tables
```

```typescript
import adb from '@atek-cloud/adb-api'
import {databases, services, users} from '@atek-cloud/adb-tables'

const mydb = adb.db('mydb')
await databases(mydb).list() // => {records: Record<Database>[]}
await services(mydb).list() // => {records: Record<Service>[]}
await users(mydb).list() // => {records: Record<User>[]}
```