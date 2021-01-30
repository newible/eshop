/*
 Navicat Premium Data Transfer

 Source Server         : root
 Source Server Type    : MySQL
 Source Server Version : 50515
 Source Host           : localhost:3306
 Source Schema         : eshop

 Target Server Type    : MySQL
 Target Server Version : 50515
 File Encoding         : 65001

 Date: 30/01/2021 18:34:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for brandinfo
-- ----------------------------
DROP TABLE IF EXISTS `brandinfo`;
CREATE TABLE `brandinfo`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `introuduce` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of brandinfo
-- ----------------------------
INSERT INTO `brandinfo` VALUES (1, 'images/about_01.jpg');
INSERT INTO `brandinfo` VALUES (2, 'images/about_02.jpg');
INSERT INTO `brandinfo` VALUES (3, 'images/about_03.jpg');
INSERT INTO `brandinfo` VALUES (4, 'images/about_04.jpg');

-- ----------------------------
-- Table structure for goods1
-- ----------------------------
DROP TABLE IF EXISTS `goods1`;
CREATE TABLE `goods1`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `goodprice` decimal(10, 2) NOT NULL,
  `goodimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `goodtype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of goods1
-- ----------------------------
INSERT INTO `goods1` VALUES (1, '少女性感短裙', 239.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/f5589252-69d5-4ba2-9393-52690496c585/YU06R5AN2002_L8/0.jpg', '女装');
INSERT INTO `goods1` VALUES (2, '翻领宽松款西装', 699.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/25a8a260-f61a-4509-93b0-ecb21a7b2b2e/WG05S1CN2001_W1/0.jpg', '女装');
INSERT INTO `goods1` VALUES (3, '双排扣西装外套', 399.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/25a8a260-f61a-4509-93b0-ecb21a7b2b2e/WH02R1CN2000_W0/0.jpg', '女装');
INSERT INTO `goods1` VALUES (4, '收腰西装外套', 599.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/7e094cd0-2b8f-4ce4-9bfa-0050a18b6994/WJ06S1CN2002_B6/0.jpg', '女装');
INSERT INTO `goods1` VALUES (5, '轻熟风西装外套', 499.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/7e094cd0-2b8f-4ce4-9bfa-0050a18b6994/WG02S1CN2000_W0/0.jpg', '女装');
INSERT INTO `goods1` VALUES (6, '双排扣西装外套', 399.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/25a8a260-f61a-4509-93b0-ecb21a7b2b2e/WH02R1CN2000_K0/0.jpg', '女装');
INSERT INTO `goods1` VALUES (7, '格纹西装外套厚', 599.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/2ff224c9-ab4e-41cb-a99b-d6346c44af85/WH04R1CN2001_BY/0.jpg', '女装');
INSERT INTO `goods1` VALUES (8, '格纹西装外套厚', 599.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/2ff224c9-ab4e-41cb-a99b-d6346c44af85/WH04R1CN2001_VY/0.jpg', '女装');
INSERT INTO `goods1` VALUES (9, '涂鸦宽松翻领夹克', 499.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/7e094cd0-2b8f-4ce4-9bfa-0050a18b6994/MV04S1EN2001_RW/0.jpg', '男装');
INSERT INTO `goods1` VALUES (10, '休闲连帽外套', 399.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/81efefbd-170d-4052-8181-b4ddfb4c4b78/MF03S1ET2000_B6/0.jpg', '男装');
INSERT INTO `goods1` VALUES (11, '口袋外套夹克', 499.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/1c443091-ab15-4abc-ad29-c033252c7dcc/MV02R1EN2001_GA/0.jpg', '男装');
INSERT INTO `goods1` VALUES (12, '潮流口袋外套', 599.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/1c443091-ab15-4abc-ad29-c033252c7dcc/ML01S1EE2002_B6/0.jpg', '男装');
INSERT INTO `goods1` VALUES (13, '格纹排扣外套', 599.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/f2668b06-70c8-4c00-9067-377bfd95fd9d/ML01S1EE2001_VU/0.jpg', '男装');
INSERT INTO `goods1` VALUES (14, '口袋外套夹克', 499.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/1c443091-ab15-4abc-ad29-c033252c7dcc/MV02R1EN2001_B6/0.jpg', '男装');
INSERT INTO `goods1` VALUES (15, '口袋翻领外套', 499.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/81efefbd-170d-4052-8181-b4ddfb4c4b78/MF01S1EX2001_B4/0.jpg', '男装');
INSERT INTO `goods1` VALUES (16, '帽领夹克外套', 499.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/25a8a260-f61a-4509-93b0-ecb21a7b2b2e/ML04S1EN2002_Z2/0.jpg', '男装');
INSERT INTO `goods1` VALUES (17, '时尚束脚裤', 299.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/f2668b06-70c8-4c00-9067-377bfd95fd9d/MV05R6KN2000_B5/0.jpg', '男装');
INSERT INTO `goods1` VALUES (18, '休闲束脚裤', 369.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/8e2a7b22-2a68-4e59-b0c6-8fc90875c72c/MV01S6KE2001_B6/0.jpg', '男装');
INSERT INTO `goods1` VALUES (19, '女装袜子', 59.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/7ac8fe2f-f22a-440e-b57b-df2995df9e96/AY38TA1N2006_K0/0.jpg', '女装');
INSERT INTO `goods1` VALUES (20, '女装复古腋下包', 99.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/f5d5886d-7c70-45d5-9539-3e55cf872cbd/AA40TB2N2002_Z7/0.jpg', '女装');

-- ----------------------------
-- Table structure for goods2
-- ----------------------------
DROP TABLE IF EXISTS `goods2`;
CREATE TABLE `goods2`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `goodprice` decimal(10, 2) NOT NULL,
  `goodimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `goodtype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of goods2
-- ----------------------------
INSERT INTO `goods2` VALUES (1, '时尚羽绒服', 699.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/2631ee42-50fd-4bb3-b1ec-f48b19d9be06/WH05S1KX2000_N1/0.jpg', '春季新品');
INSERT INTO `goods2` VALUES (2, '收腰西装外套', 599.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/7e094cd0-2b8f-4ce4-9bfa-0050a18b6994/WJ06S1CN2002_B6/0.jpg', '春季新品');
INSERT INTO `goods2` VALUES (3, '简约夹克外套', 399.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/8f64b134-d4ac-4940-8ee1-6588dda3a94f/WJ06S1EN2000_W0/0.jpg', '春季新品');
INSERT INTO `goods2` VALUES (4, '格纹宽松西装外套', 599.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG06S1CN2001_BY/0.jpg', '春季新品');
INSERT INTO `goods2` VALUES (5, '翻领收腰风衣外套', 699.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/f5589252-69d5-4ba2-9393-52690496c585/WJ08S1DN2000_K1/0.jpg', '春季新品');
INSERT INTO `goods2` VALUES (6, '休闲风衣外套', 599.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WH08S1DN2000_W0/0.jpg', '春季新品');
INSERT INTO `goods2` VALUES (7, '宽松大衣外套', 599.00, 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG05S1GE2000_K0/0.jpg', '春季新品');

-- ----------------------------
-- Table structure for goodsdetail
-- ----------------------------
DROP TABLE IF EXISTS `goodsdetail`;
CREATE TABLE `goodsdetail`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `goodsprice` decimal(10, 2) NOT NULL,
  `material` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img4` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img5` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img6` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `size1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `size2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `size3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `size4` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of goodsdetail
-- ----------------------------
INSERT INTO `goodsdetail` VALUES (1, '时尚羽绒服', 699.00, '面料： 主身：100%锦纶 领面：100%棉 里料：100%聚酯纤维 填充物： 主身：白鸭绒 领：100%聚酯纤维 含绒量：90%', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/2631ee42-50fd-4bb3-b1ec-f48b19d9be06/WH05S1KX2000_N1/1.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/2631ee42-50fd-4bb3-b1ec-f48b19d9be06/WH05S1KX2000_N1/2.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/2631ee42-50fd-4bb3-b1ec-f48b19d9be06/WH05S1KX2000_N1/3.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/2631ee42-50fd-4bb3-b1ec-f48b19d9be06/WH05S1KX2000_N1/4.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/2631ee42-50fd-4bb3-b1ec-f48b19d9be06/WH05S1KX2000_N1/5.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/2631ee42-50fd-4bb3-b1ec-f48b19d9be06/WH05S1KX2000_N1/6.jpg', 'XS(160/80A)', 'S(165/84A)', 'M(170/88A)', 'L(170/92A)');
INSERT INTO `goodsdetail` VALUES (2, '收腰西装外套', 599.00, '面料：67%聚酯纤维 30%粘纤 3%氨纶 里料：100%聚酯纤维 装饰腰带除外', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/7e094cd0-2b8f-4ce4-9bfa-0050a18b6994/WJ06S1CN2002_B6/1.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/7e094cd0-2b8f-4ce4-9bfa-0050a18b6994/WJ06S1CN2002_B6/2.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/7e094cd0-2b8f-4ce4-9bfa-0050a18b6994/WJ06S1CN2002_B6/3.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/7e094cd0-2b8f-4ce4-9bfa-0050a18b6994/WJ06S1CN2002_B6/4.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/7e094cd0-2b8f-4ce4-9bfa-0050a18b6994/WJ06S1CN2002_B6/5.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/7e094cd0-2b8f-4ce4-9bfa-0050a18b6994/WJ06S1CN2002_B6/6.jpg', 'XS(160/80A)', 'S(165/84A)', 'M(170/88A)', 'L(170/92A)');
INSERT INTO `goodsdetail` VALUES (3, '简约夹克外套', 399.00, '62%棉 38%聚酯纤维 装饰物除外', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/8f64b134-d4ac-4940-8ee1-6588dda3a94f/WJ06S1EN2000_W0/1.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/8f64b134-d4ac-4940-8ee1-6588dda3a94f/WJ06S1EN2000_W0/2.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/8f64b134-d4ac-4940-8ee1-6588dda3a94f/WJ06S1EN2000_W0/3.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/8f64b134-d4ac-4940-8ee1-6588dda3a94f/WJ06S1EN2000_W0/4.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/8f64b134-d4ac-4940-8ee1-6588dda3a94f/WJ06S1EN2000_W0/5.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/8f64b134-d4ac-4940-8ee1-6588dda3a94f/WJ06S1EN2000_W0/6.jpg', 'XS(160/80A)', 'S(165/84A)', 'M(170/88A)', 'L(170/92A)');
INSERT INTO `goodsdetail` VALUES (4, '格纹宽松西装外套', 599.00, '面料：64%聚酯纤维 36%粘纤 里料：100%聚酯纤维', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG06S1CN2001_BY/1.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG06S1CN2001_BY/2.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG06S1CN2001_BY/3.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG06S1CN2001_BY/4.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG06S1CN2001_BY/5.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG06S1CN2001_BY/6.jpg', 'XS(160/80A)', 'S(165/84A)', 'M(170/88A)', 'L(170/92A)');
INSERT INTO `goodsdetail` VALUES (5, '\r\n\r\n翻领收腰风衣外套', 699.00, '面料：100%聚酯纤维 里料：100%聚酯纤维', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/f5589252-69d5-4ba2-9393-52690496c585/WJ08S1DN2000_K1/1.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/f5589252-69d5-4ba2-9393-52690496c585/WJ08S1DN2000_K1/2.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/f5589252-69d5-4ba2-9393-52690496c585/WJ08S1DN2000_K1/3.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/f5589252-69d5-4ba2-9393-52690496c585/WJ08S1DN2000_K1/4.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/f5589252-69d5-4ba2-9393-52690496c585/WJ08S1DN2000_K1/5.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/f5589252-69d5-4ba2-9393-52690496c585/WJ08S1DN2000_K1/6.jpg', 'XS(160/80A)', 'S(165/84A)', 'M(170/88A)', 'L(170/92A)');
INSERT INTO `goodsdetail` VALUES (6, '休闲风衣外套', 599.00, '63%锦纶 32%棉 5%氨纶', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WH08S1DN2000_W0/1.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WH08S1DN2000_W0/2.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WH08S1DN2000_W0/3.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WH08S1DN2000_W0/4.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WH08S1DN2000_W0/5.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WH08S1DN2000_W0/6.jpg', 'XS(160/80A)', 'S(165/84A)', 'M(170/88A)', 'L(170/92A)');
INSERT INTO `goodsdetail` VALUES (7, '宽松大衣外套', 599.00, '63%锦纶 32%棉 5%氨纶', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG05S1GE2000_K0/1.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG05S1GE2000_K0/2.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG05S1GE2000_K0/3.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG05S1GE2000_K0/4.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG05S1GE2000_K0/5.jpg', 'https://gw-img.ur.com.cn//urmall/uploadImportTmp/962cafa3-4ffc-43e7-9437-8b4e5afac19b/WG05S1GE2000_K0/6.jpg', 'XS(160/80A)', 'S(165/84A)', 'M(170/88A)', 'L(170/92A)');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sex` char(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '女',
  `age` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '绫清竹', '111111', '女', 16);
INSERT INTO `user` VALUES (2, '雪女', '222222', '女', 15);
INSERT INTO `user` VALUES (3, '红莲', '333333', '女', 19);
INSERT INTO `user` VALUES (4, '高渐离', '555555', '男', 20);
INSERT INTO `user` VALUES (5, '小庄', '666666', '男', 19);
INSERT INTO `user` VALUES (6, '无心', '888888', '男', NULL);

SET FOREIGN_KEY_CHECKS = 1;
