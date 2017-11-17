var GAME_LEVELS = [
  ["                                                                               ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                        xx!!!xxxx!!!xxxx                                        ",
   "                       xxx!!!xxxx!!!xxxxx                                       ",
   "                      xxxxxvxxxxxxvxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                     x                       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                     x                         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                     x o                                                        ",
   "                      xxx                                                       ",
   "                                      o                                         ",
   "                                     xxx                                        ",
   "                               $      xx    xxxx                                ",
   "                             xxxx      x     xxxxxx              y              ",
   "  @                           xxx      x      xxxxxxxx                  o   o   ",
   " xxx                  xxx      xx      x      xxxxxxxxxxx           xxxxxxxxxxx ",
   "   x                 <!!!x      x      x      xxxxxxxxxxxxx       xxxxxxxxxxxxx ",
   "   x        xxx      x!!!x      x      x      xxxxxxxxxxxxx     xxxxxxxxxxxxxxx ",
   "   x       x   x     x!!!x      x      x      xxxxxxxxxxxxx o xxxxxxxxxxxxxxxxx ",
   "!!!x!!!!!!!x   x!!!!!x!!!x!!!!!!x      x      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
   ["    xxxxxxxxxxxxxxxxx                                                       xxxx",
   "     xxxxxxxxxxxxxxxxxxx                                                   xxxxxx",
   "     xxxxxxx!!!!!!!xxxxxxx                                               xxxxxxxx",
   "     xxxxxx!!!!xx!!!xxxxxxxxxx                                         xxxxxxxxxx",
   "      xxxxxxvxxxx!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "              xxx!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "               xx!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxvxx!!!xxxxxxxxxxxxxxxxxxxxxxxxx ",
   "                x!!!!!!!xxxxxxxxxxxxxxx!!!!xx      xx!!!!!!xxxxxxxxxxxxxxxxxxxxx ",
   "                 xvxxxx!!!xxxxxxxxxxxxx!!xx         xxxxx!!!!!!!!!!!!!!!!!xxx    ",
   "  x @               xxxxx!xxxxxxxxxxxxx!!x              xx!!!xxxxxxxxxxxxxx      ",
   "  xxxx                 xx!!!!!!!!!!!!!!!x                xxxxxxxxxxxxxxxx        ",
   "  xxxxxxx               xxxxxxxxxxxxxxxx                     xxxxxxxxx           ",
   "  x xxxxxxxx                                                  xxxxxxx            ",
   "  x    xxxxxxxx                                    $                             ",
   "  x       xxxxxxxx  o                            xxxxx                           ",
   "  x         xxxxxxxxx                         xxxxxxxxxxx                    o o ",
   "  x           xxxxxxxxxx                 o xxxxxxx   xxxxxxx             xxxxxxxx",
   "  x             xxxxxxxxxx  o    y      xxxxx             xxxxx          <!!xxxx ",
   "  x                xxxxxxxxxxx       xxxxx                  xxxx o     xxx!!xx   ",
   "  x                      xxxxxxx   xxxx                         xxx   xx!!!!x    ",
   "  x                        xxxx!!!!!x                             x!!!xx!!!!x    ",
   "  x                          xx!!!!!x                             x!!!!!!!!!x    ",
   "!!x                           xx!!!x                              xx!xxxxxxxxxxxx"],
   ["                                                                                                                   ",
   "                                                                                                                   ", 
   "                                                                                                                   ",
   "                                                                                                                   ",
   "                                                                                                                   ",
   "                                                                                                                   ",
   "                                                                                                                   ",
   "                             xxxxxxx                                                                               ",
   "                      xxx   xx!!!!!xx                                                                              ",
   "                             xx!!!xx   o     xxx                                                                   ",
   "          xxxx                xxvxx               xxxxxxx                                                          ",
   "xxx                                   xxx   !!!!!!xxxxxx                                                           ",
   "                                            !x!!!xxxxx                                                             ",
   "     o      y       o                       !xxxx                                                                  ",
   "                                            !xxxxx                y                                                 ",
   "    xxx    xxx     xxx      xx      xx      !xxx                           o                                       ",
   "      x!!!!!!!!!!!!x        xx      xx      !xxx                          xxx                                      ",
   "      xxxxxxxxxxxxxx        xx     xxx      !xxx          o          xxx        xxx                                ",
   "                            x       xx      !xxx               xxx                   xxx     o                     ",
   "                            x       xx      !xxxxx       xxxx                               xxxx                   ",
   "                            xxx    xxx      !xxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxx                    ",
   "                            x       xx      ! xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                         ",
   "                                    xx      !                                                                      ",
   "                                  xxxx      !                                                                      ",
   "                                   xxx      !                                                                      ",
   "                     o             xxx      !                                                       xxxxx          ",
   "                        xxx  xxxxxxxxx      !                       y     $                          xxx           ",
   "  xx                xxx      xxxxxxxxx      !    o                       xxx              xxx      xxxxxxx  o  xx  ",
   "   x @         xxx           xxxxxxxxx      !            xxx                              <!x      xxxxxxx     x   ",
   "   xxxxxxxxxx                xxxxxxxxx      !   xxxx              xx             xx       x!x   xxxxxxxxxxxxxxxx   ",
   "!!!xxxxxxxxxx!!!!!!!!!!!!!!!!xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxx!!!",
   "                                                                                                                   ",
   "                                                                                                                   "], 
  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;


