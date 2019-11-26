function PokemonDao(connection) {
    this._connection = connection;
}

PokemonDao.prototype.lista = function(callback) {
    this._connection.query('SELECT * FROM pokemon',callback);
}

PokemonDao.prototype.buscaPorId = function (id,callback) {
    this._connection.query("SELECT * FROM pokemon WHERE pokemon_id = ?",[id],callback);
}


module.exports = function(){
    return PokemonDao;
};
