package practice_allie;

//📌 인터페이스: Music
interface Music {
 void play(String song);  // 음악 재생 메서드
 void stop(String song);  // 음악 정지 메서드
}

//📌 MP3 플레이어 클래스 (Music 인터페이스 구현)
class Mp3Player implements Music {
 @Override
 public void play(String song) {
     System.out.println("MP3 플레이어에서 '" + song + "' 음악을 재생합니다.");
 }

 @Override
 public void stop(String song) {
     System.out.println("MP3 플레이어에서 '" + song + "' 음악을 정지합니다.");
 }
}

//📌 CD 플레이어 클래스 (Music 인터페이스 구현)
class CdPlayer implements Music {
 @Override
 public void play(String album) {
     System.out.println("CD 플레이어에서 '" + album + "' 앨범을 재생합니다.");
 }

 @Override
 public void stop(String album) {
     System.out.println("CD 플레이어에서 '" + album + "' 앨범을 정지합니다.");
 }
}

public class MusicPlayer {
	 public static void main(String[] args) {
	        // MP3 플레이어 객체 생성
	        Music mp3 = new Mp3Player();
	        System.out.println("\n=== MP3 Player ===");
	        mp3.play("아이유 블루밍");
	        mp3.stop("아이유 블루밍");

	        System.out.println("----------------");

	        // CD 플레이어 객체 생성
	        Music cd = new CdPlayer();
	        System.out.println("\n=== CD Player ===");
	        cd.play("아이유 꽃갈피");
	        cd.stop("아이유 꽃갈피");
	    }
}
