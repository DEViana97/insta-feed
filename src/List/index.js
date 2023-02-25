/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ListPost({data}) {
  function carregaIcone(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  }

  function mostraLikes(likers) {
    if (likers === 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {likers} {likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.viewPerfil}>
        <Image source={{uri: data.imgperfil}} style={styles.fotoPerfil} />
        <Text style={styles.nomeUsuario}>{data.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        style={styles.fotoPublicacao}
        source={{uri: data.imgPublicacao}}
      />
      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image style={styles.iconeLike} source={carregaIcone(data.likeada)} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            style={styles.iconeLike}
            source={require('../img/comment.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image style={styles.iconeLike} source={require('../img/send.png')} />
        </TouchableOpacity>
      </View>
      {mostraLikes(data.likers)}
      <Text style={styles.nomeRodape}>{data.nome}</Text>
      <Text style={styles.descRodape}>{data.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomeUsuario: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000',
  },
  fotoPublicacao: {
    height: 400,
    alignItems: 'center',
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike: {
    width: 25,
    height: 25,
  },
  btnSend: {
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  descRodape: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15,
    color: '#000',
  },
});
