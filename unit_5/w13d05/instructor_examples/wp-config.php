<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '*4guZJb7nXi^feE`FyCuVr]4~U/f{(l#Pwi)Rb&i!pAx(.90Tr3Q-DhE0 7W(V1*');
define('SECURE_AUTH_KEY',  'pT{ EzUZo@PzogT Uc4W{Pipjc7qvF5tbNcmct>3ql0K7c|/wPO@rP`*,iH.ajv6');
define('LOGGED_IN_KEY',    'gR~@#VQP*:A.T]#{ok&EW`BvHh1<slQ-ZMm:[z/%,VvG^79iX!2C/%0kUqTyH*z,');
define('NONCE_KEY',        'pvAgw>k6D_ 8.G:}Ji)$Zm>e[:TKR4DO)<<v>kyfa@<$-[ng=^:*:AC3}ZP;L%e0');
define('AUTH_SALT',        'u/F`bs(.sE3AEB$a+Ribuha[)_shFYv#r=?P{ ;XY$>Z5wFiE:%{OC!T+lNn8W((');
define('SECURE_AUTH_SALT', '5gudj!-fNPX%oxAJ>y]0xTty =@*YgDxuJY+D/ nb#SS,V6|g]xzsubS$#~1<eYr');
define('LOGGED_IN_SALT',   'nhns^aL9saODbT9{P0vqMq|]17]tShDZ|jCmkn57,%G/cdz^((q_TFcG;J)@Wjh~');
define('NONCE_SALT',       '0_Xt/CQ@B(tK~a}B&*@K[dB:SIV!W7?#k2Gh|rQGOQL+nocA;F,M/D$VrhdD*D]h');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
