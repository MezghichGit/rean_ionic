import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
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
})
export default styles;