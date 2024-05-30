import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
    marginBottom: 5
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#07B0A8',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonDelete: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 50,
    marginRight: 5,
    marginTop: 5,
  }
,
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,

  },
  box: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: '#151515',
  },
  description: {
    fontSize: 15,
    color: '#646464',
  },
  view: {
    backgroundColor: '#eee',
  },
  post: {
    marginBottom: 20,
  },
  postImage: {
    width: 100,
    height: 100,
  },
  postContent: {
    padding: 20,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postMeta: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  postExcerpt: {
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#07B0A8',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10, // Marge en haut
    marginLeft: 200, // Marge à gauche
    marginRight: 10
  },
  addButtonText: {
    color: 'white',
    marginLeft: 10,
  },
  uploadButton: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft:0,
    borderRadius: 15,
    backgroundColor:'#e7e7e7',
  },
  cameraButton: {
    backgroundColor: 'white',
    padding: 10,
    marginRight:50,
    borderRadius: 15,
    backgroundColor:'#e7e7e7',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5, marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginLeft:10,
    marginVertical: 10,
    width:'80%'
  },
  imageCont: {
    width: '100%',
    height: 250,
  },
  icon: {
    width: 20,
    height: 20,
  },
})
export default styles;