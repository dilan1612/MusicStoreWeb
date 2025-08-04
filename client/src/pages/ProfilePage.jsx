import React, { useState } from 'react';
import { User, Mail, Lock, Edit3, Save, X, Guitar, ShoppingBag, Heart, Star, Calendar, Package } from 'lucide-react';

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userStats, setUserStats] = useState({
    totalOrders: 12,
    favoriteItems: 8,
    memberSince: "2023",
    totalSpent: 2450
  });

  // Datos simulados del usuario (en una app real vendrían de props o context)
  const [userData, setUserData] = useState({
    username: "RockMaster_2024",
    email: "rockmaster@email.com",
    password: "••••••••"
  });

  const [editData, setEditData] = useState({ ...userData });

  const recentOrders = [
    {
      id: "#RM-001",
      date: "2024-07-25",
      items: "Gibson Les Paul Studio + Amplificador Marshall",
      total: "$1,499",
      status: "Entregado"
    },
    {
      id: "#RM-002",
      date: "2024-07-20",
      items: "Shure SM58 + Cable XLR",
      total: "$129",
      status: "En tránsito"
    },
    {
      id: "#RM-003",
      date: "2024-07-15",
      items: "Cuerdas Ernie Ball + Púas",
      total: "$25",
      status: "Entregado"
    }
  ];

  const favoriteItems = [
    { name: "Fender Stratocaster", price: "$899", image: "🎸" },
    { name: "Pearl Export Kit", price: "$799", image: "🥁" },
    { name: "Boss DS-1 Distortion", price: "$49", image: "🎛️" },
    { name: "Audio-Technica AT2020", price: "$99", image: "🎤" }
  ];

  const handleSave = () => {
    setUserData({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...userData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-red-800"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 border-b border-red-900/30 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center space-x-4">
          <Guitar className="w-8 h-8 text-red-500" />
          <h1 className="text-2xl font-bold text-red-400">MI PERFIL ROCKERO</h1>
        </div>
      </div>

      <div className="relative z-10 p-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Profile Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-black/60 border-2 border-red-900 rounded-none p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-red-400">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{userData.username}</h2>
                <p className="text-red-400">Miembro desde {userStats.memberSince}</p>
              </div>

              {/* User Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center bg-red-900/30 p-3 border border-red-800">
                  <div className="text-2xl font-bold text-red-300">{userStats.totalOrders}</div>
                  <div className="text-sm text-gray-400">Pedidos</div>
                </div>
                <div className="text-center bg-red-900/30 p-3 border border-red-800">
                  <div className="text-2xl font-bold text-red-300">{userStats.favoriteItems}</div>
                  <div className="text-sm text-gray-400">Favoritos</div>
                </div>
                <div className="text-center bg-red-900/30 p-3 border border-red-800">
                  <div className="text-2xl font-bold text-red-300">${userStats.totalSpent}</div>
                  <div className="text-sm text-gray-400">Gastado</div>
                </div>
                <div className="text-center bg-red-900/30 p-3 border border-red-800">
                  <Star className="w-6 h-6 text-red-400 mx-auto mb-1" />
                  <div className="text-sm text-gray-400">VIP</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <button className="w-full bg-red-600 hover:bg-red-700 py-3 px-4 rounded-none font-semibold transition-colors flex items-center justify-center space-x-2">
                  <ShoppingBag className="w-5 h-5" />
                  <span>VER PEDIDOS</span>
                </button>
                <button className="w-full border-2 border-red-500 hover:bg-red-500 hover:text-black py-3 px-4 rounded-none font-semibold transition-all flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>MIS FAVORITOS</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Personal Information */}
            <div className="bg-black/60 border-2 border-red-900 rounded-none p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-red-400 flex items-center space-x-2">
                  <User className="w-6 h-6" />
                  <span>INFORMACIÓN PERSONAL</span>
                </h3>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Editar</span>
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Guardar</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancelar</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-red-400 mb-2">
                    NOMBRE DE USUARIO
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.username}
                      onChange={(e) => setEditData({ ...editData, username: e.target.value })}
                      className="w-full bg-black border-2 border-red-800 focus:border-red-500 rounded-none px-4 py-3 text-white focus:outline-none"
                    />
                  ) : (
                    <div className="bg-red-900/20 border border-red-800 rounded-none px-4 py-3 text-gray-300">
                      {userData.username}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-red-400 mb-2">
                    EMAIL
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      className="w-full bg-black border-2 border-red-800 focus:border-red-500 rounded-none px-4 py-3 text-white focus:outline-none"
                    />
                  ) : (
                    <div className="bg-red-900/20 border border-red-800 rounded-none px-4 py-3 text-gray-300 flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{userData.email}</span>
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-red-400 mb-2">
                    CONTRASEÑA
                  </label>
                  <div className="bg-red-900/20 border border-red-800 rounded-none px-4 py-3 text-gray-300 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4" />
                      <span>{userData.password}</span>
                    </div>
                    <button className="text-red-400 hover:text-red-300 text-sm">
                      Cambiar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-black/60 border-2 border-red-900 rounded-none p-6">
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center space-x-2">
                <Package className="w-6 h-6" />
                <span>PEDIDOS RECIENTES</span>
              </h3>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="bg-red-900/20 border border-red-800 rounded-none p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold text-white">{order.id}</div>
                        <div className="text-sm text-gray-400 flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{order.date}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-red-300">{order.total}</div>
                        <div className={`text-sm px-2 py-1 rounded-none ${
                          order.status === 'Entregado' 
                            ? 'bg-green-600 text-white' 
                            : 'bg-yellow-600 text-black'
                        }`}>
                          {order.status}
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-300 text-sm">{order.items}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Items */}
            <div className="bg-black/60 border-2 border-red-900 rounded-none p-6">
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center space-x-2">
                <Heart className="w-6 h-6" />
                <span>INSTRUMENTOS FAVORITOS</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {favoriteItems.map((item, index) => (
                  <div key={index} className="bg-red-900/20 border border-red-800 rounded-none p-4 flex items-center space-x-4">
                    <div className="text-3xl">{item.image}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-red-300 font-bold">{item.price}</div>
                    </div>
                    <button className="text-red-400 hover:text-red-600 transition-colors">
                      <Heart className="w-5 h-5 fill-current" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-bounce text-red-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            🎸
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;