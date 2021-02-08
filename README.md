<p align="left">
   <img src="public/multer-logo.png" width="400"/>
</p>

# Files Upload - multer
----
  It's a simple API RESTful to upload files using multer library.


## :rocket: Technologies

This project was developed with the following technologies:

-  [NodeJS](https://nodejs.org/en/)
-  [Multer](https://www.npmjs.com/package/multer)
-  [Typescript](https://www.typescriptlang.org/)
-  [Typeorm](https://typeorm.io/#/)
-  [VS Code][vc]

## 📋 Features

### Documentation

- [x] Upload files
- [x] Show files
- [x] Delete files
- [x] Show information about all files
- [x] Find a specific file

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v12.20.0][nodejs] or higher + [Yarn 1.22.5][yarn] or higher installed on your computer. From your command line:

```bash
# Create postgres docker
$ sudo docker run --name files-upload-multer -e POSTGRES_PASSWORD=1234 -p 5433:5432 -d postgres

# Create 'users' database
$ CREATE DATABASE uploads;

# Clone this repository
$ git clone https://github.com/isaac-allef/files-upload-multer.git

# Go into the repository
$ cd files-upload-multer

# Install dependencies and run it
$ yarn install
$ yarn dev:server
```

## Routes

|             method           |               url               |                description                |
|:-----------------------------|:--------------------------------|:------------------------------------------|
| `post`                       | [/uploads](#uploads)            | Upload a file                             |
| `get`                        | [/files/:filesname](#show)      | Show a file                               |
| `delete`                     | [/uploads/:filename](#delete)   | Delete a file                             |
| `get`                        | [/uploads/:filename](#find)     | Find a file and show your information     |
| `get`                        | [/uploads](#list)               | List all files and show their information |


## Uploads

Upload a file.

**URL** : `/uploads`

**Method** : `POST`

**How to use**:

```html
<form action="/uploads" method="post" enctype="multipart/form-data">
  <input type="file" name="onFile" />
</form>
```

### Success Response

**Code** : `200 OK`

**Content example**:

```json
{
  "filename": "5fbd10d3cd740c7f98ec-anyImage.png",
  "mimetype": "image/png",
  "size": 23044,
  "id": "e6f78d74-cd1a-41c6-8cb1-47bc0abcbecf",
  "created_at": "2021-02-07T00:17:19.293Z",
  "updated_at": "2021-02-07T00:17:19.293Z"
}
```

<!--
### Error Response

**Condition** : If 'username' and 'password' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "Unable to login with provided credentials."
    ]
}
```
-->

## Show

Show a file.

**URL** : `/files/:filesname`

**Method** : `GET`

**URL params**: 
```
:filename -> [filename with file extension]
```

**URL params example**: `/files/5fbd10d3cd740c7f98ec-Avatar.png`

### Success Response

**Code** : `200 OK`


## Delete

Delete a file.

**URL** : `/uploads/:filename`

**Method** : `DELETE`

**URL params**: 
```
:filename -> [filename with file extension]
```

**URL params example**: `/uploads/5fbd10d3cd740c7f98ec-Avatar.png`

### Success Response

**Code** : `200 OK`


## Find

Find a file and show your information.

**URL** : `/uploads/:filename`

**Method** : `GET`

**URL params**: 
```
:filename -> [filename with file extension]
```

**URL params example**: `/uploads/5fbd10d3cd740c7f98ec-Avatar.png`

### Success Response

**Code** : `200 OK`
```json
{
  "file": {
    "filename": "5fbd10d3cd740c7f98ec-anyImage.png",
    "mimetype": "image/png",
    "size": 23044,
    "id": "e6f78d74-cd1a-41c6-8cb1-47bc0abcbecf",
    "created_at": "2021-02-07T00:17:19.293Z",
    "updated_at": "2021-02-07T00:17:19.293Z"
  }
}
```


## List

List all files and show their information.

**URL** : `/uploads`

**Method** : `GET`

### Success Response

**Code** : `200 OK`
```json
{
  "files": [
    {
      "id": "6e17ef51-f9f8-468c-8742-76b7df17e3d7",
      "filename": "5fbd10d3cd740c7f98ec-anyImage.png",
      "mimetype": "image/png",
      "size": 23044,
      "created_at": "2021-02-06T23:28:03.629Z",
      "updated_at": "2021-02-06T23:28:03.629Z"
    },
    {
      "id": "f54f8328-61bc-4818-957c-15fbb9b2efb2",
      "filename": "97c43750dec7d2331840-test.txt",
      "mimetype": "text/plain",
      "size": 12,
      "created_at": "2021-02-09T00:44:38.714Z",
      "updated_at": "2021-02-09T00:44:38.714Z"
    }
  ]
}
```


## :memo: License
This project is under the MIT license. See the [LICENSE](LICENSE) for more information.

---

Made with ♥ by Isaac Allef :wave:

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
